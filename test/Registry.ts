import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

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

    const Registry = await ethers.getContractFactory("Registry");
    const registry = await Registry.deploy()

    return { registry, owner, borrower, lender, ONE_YEAR_IN_SECS, debtAmount, splits }
  }

  describe("Deployment", function () {
    it("Should set the right status", async function(){
        const { registry, borrower, lender, ONE_YEAR_IN_SECS, debtAmount, splits } = await loadFixture(deployOneYearDebtFixture);
    
        expect(await registry.connect(borrower).createDebt(lender.address, debtAmount, ONE_YEAR_IN_SECS, splits))
        .to.emit(registry, 'DebtCreated').withArgs(anyValue, borrower.address)
    })
  })
})