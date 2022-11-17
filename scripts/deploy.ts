import { ethers } from "hardhat";

async function main() {

  // Contracts are deployed using the first signer/account by default
  const [owner, borrower, lender] = await ethers.getSigners();


  const Registry = await ethers.getContractFactory("Registry");
  const registry = await Registry.deploy();
  console.log(`Registry deployed to ${registry.address}`);

  // const Token = await ethers.getContractFactory("Token");
  // const token = await Token.deploy();
  // await token.connect(borrower).mint(debtAmount);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
