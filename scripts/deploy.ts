import { ethers } from "hardhat";

async function main() {

  const amount = ethers.BigNumber.from("35000000000000000000") 
  const debtAmount = amount;
  const borrower = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"

  // Contracts are deployed using the first signer/account by default
  const [owner] = await ethers.getSigners();


  const Registry = await ethers.getContractFactory("Registry");
  const registry = await Registry.deploy();
  console.log(`Registry deployed to ${registry.address}`);

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  console.log(`Token deployed to ${token.address}`);
  await token.mint(debtAmount);
  await token.transfer(borrower, debtAmount);
  const balance = await token.balanceOf(borrower);
  console.log("balance: ", balance)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
