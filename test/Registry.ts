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
    const splits = 52;

    // Contracts are deployed using the first signer/account by default
    const [owner, borrower, lender] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();

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
    
        expect(await registry.connect(borrower).createDebt(lender.address, token.address, debtAmount, ONE_YEAR_IN_SECS, splits))
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
      await  expect(registry.connect(borrower).acceptDebt(id)).to.be.revertedWith("Registry: Only lender can accept a Debt");
      
      await expect(registry.connect(lender).acceptDebt(id))
      .to.emit(registry, "DebtAccepted");

      const debt = await registry.Debts(id);
      expect(debt.status).to.be.equal(1);
      const latestTime = await time.latest();

      expect(debt.Deadline).to.be.equal(ONE_YEAR_IN_SECS + latestTime);
    })

  })
})