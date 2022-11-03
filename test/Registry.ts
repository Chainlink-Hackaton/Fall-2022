import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { DebtCreatedEvent } from "../typechain-types/Registry";

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

    return { registry, owner, borrower, lender, ONE_YEAR_IN_SECS, debtAmount, splits, token }
  }

  describe("Deployment", function () {
    it("Should emit DebtCreated event", async function(){
        const { registry, borrower, lender, ONE_YEAR_IN_SECS, debtAmount, splits, token } = await loadFixture(deployOneYearDebtFixture);
    
        expect(await registry.connect(borrower).createDebt(lender.address, token.address, debtAmount, ONE_YEAR_IN_SECS, splits))
        .to.emit(registry, 'DebtCreated').withArgs(anyValue, borrower.address)
    })

    it("Should return have created the Debt correctly", async function(){
      const { registry, borrower, lender, ONE_YEAR_IN_SECS, debtAmount, splits, token } = await loadFixture(deployOneYearDebtFixture);
     let tx = await registry.connect(borrower).createDebt(lender.address, token.address, debtAmount, ONE_YEAR_IN_SECS, splits)
     const events = await registry.queryFilter("*");
     events as DebtCreatedEvent[]
     for(const e of events){
        const id = e.args.id;
        const debt = await registry.Debts(id)
        expect(debt.Owner).to.be.equal(borrower.address);
        expect(debt.Lender).to.be.equal(lender.address);
        expect(debt.Currency).to.be.equal(token.address);
        expect(debt.Amount).to.be.equal(debtAmount);
        expect(debt.Split).to.be.equal(splits);
        expect(debt.status).to.be.equal(0);
     }
    })
  })
})