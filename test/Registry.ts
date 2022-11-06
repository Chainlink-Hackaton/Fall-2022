import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { DebtCreatedEvent } from "../typechain-types/Registry";
import { emit } from "process";

describe("Registry", function (){
    // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearDebtFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000; 

    const debtAmount = ONE_GWEI;
    const splits = 50;

    // Contracts are deployed using the first signer/account by default
    const [owner, borrower, lender] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    await token.connect(borrower).mint(debtAmount);


    const Registry = await ethers.getContractFactory("Registry");
    const registry = await Registry.deploy()

    let tx = await registry.connect(borrower).createDebt(lender.address, token.address, debtAmount, ONE_YEAR_IN_SECS, splits)
    const events = await registry.queryFilter("*");
    let id;
    for(const e of events){
        id = e.args.id;
    }

    return { registry, owner, borrower, lender, ONE_YEAR_IN_SECS, debtAmount, splits, token, id }
  }

  describe("Deployment", function () {
    it("Should emit DebtCreated event", async function(){
        const { registry, borrower, lender, ONE_YEAR_IN_SECS, debtAmount, splits, token } = await loadFixture(deployOneYearDebtFixture);
    
        await expect( registry.connect(borrower).createDebt(lender.address, token.address, debtAmount, ONE_YEAR_IN_SECS, splits))
        .to.emit(registry, 'DebtCreated').withArgs(anyValue, borrower.address);
    })

    it("Should return have created the Debt correctly", async function(){
      const { registry, borrower, lender, ONE_YEAR_IN_SECS, debtAmount, splits, token, id } = await loadFixture(deployOneYearDebtFixture);
  
      const debt = await registry.Debts(id);
      expect(debt.Owner).to.be.equal(borrower.address);
      expect(debt.Lender).to.be.equal(lender.address);
      expect(debt.Currency).to.be.equal(token.address);
      expect(debt.Amount).to.be.equal(debtAmount);
      expect(debt.Deadline).to.be.equal(ONE_YEAR_IN_SECS);
      expect(debt.Split).to.be.equal(splits);
      expect(debt.status).to.be.equal(0);  
    })


    it("Only lender can accept debt", async function (){
      const { registry, borrower, lender, ONE_YEAR_IN_SECS, id } = await loadFixture(deployOneYearDebtFixture);
      await  expect(registry.connect(borrower).acceptDebt(id))
      .to.be.revertedWith("Registry: Only lender can accept a Debt");
      
      await expect(registry.connect(lender).acceptDebt(id))
      .to.emit(registry, "DebtAccepted");

      const debt = await registry.Debts(id);
      expect(debt.status).to.be.equal(1);
      const latestTime = await time.latest();

      expect(debt.Deadline).to.be.equal(ONE_YEAR_IN_SECS + latestTime);
    })

    it("Only borrower can register a payment", async function (){
      const { registry, borrower, lender, token, ONE_YEAR_IN_SECS, id } = await loadFixture(deployOneYearDebtFixture);
      const payment = 20_000_000;
      const tx = await token.connect(borrower).transfer(lender.address, payment);

      await expect(registry.connect(borrower).registerPayment(id, tx.hash))
      .to.be.revertedWith("Registry: Debt status is not approved");
     
      await registry.connect(lender).acceptDebt(id);
      
      await expect(registry.connect(lender).registerPayment(id, tx.hash))
      .to.be.revertedWith("Registry: Only borrower can register a debt");

      await expect(registry.connect(borrower).registerPayment(id, tx.hash))
      .to.emit(registry, 'PaymentRegistered').withArgs(id, tx.hash);

      const debt = await registry.Debts(id);
      expect(debt.status).to.be.equal(1);

      expect(await registry.getPaymentsCount(id)).to.be.equal(1);
      const payments = await registry.getPayments(id)
      expect(payments[0]).to.be.equal(tx.hash);
    })

    it("Should not have reach the Deadline", async function (){
      const { registry, borrower, lender, token, ONE_YEAR_IN_SECS, id } = await loadFixture(deployOneYearDebtFixture);
      const payment = 20_000_000;
      const tx = await token.connect(borrower).transfer(lender.address, payment);
      await registry.connect(lender).acceptDebt(id);

      //We can increase the time in Hardhat Network
      const deadline = (await time.latest()) + ONE_YEAR_IN_SECS;
      await time.increaseTo(deadline);

      await expect(registry.connect(borrower).registerPayment(id, tx.hash))
      .to.be.revertedWith("Registry: too late to pay");
    })

    it("Should be able to change Debt status to default", async function(){
      const { registry, borrower, lender, token, ONE_YEAR_IN_SECS, id } = await loadFixture(deployOneYearDebtFixture);
      await registry.connect(lender).acceptDebt(id);
      await expect(registry.setDebtToDefault(id)).to.be.revertedWith("Registry: Deadline not reached yet");
      //We can increase the time in Hardhat Network
      const deadline = (await time.latest()) + ONE_YEAR_IN_SECS;
      await time.increaseTo(deadline);

      await expect(registry.setDebtToDefault(id)).to.emit(registry, "DebtDefault").withArgs(id, borrower.address)
    })
  })

})