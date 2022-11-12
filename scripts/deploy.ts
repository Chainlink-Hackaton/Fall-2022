import { ethers } from "hardhat";

async function main() {

  const Registry = await ethers.getContractFactory("Registry");
  const registry = await Registry.deploy();
  console.log(`Registry deployed to ${registry.address}`);
  process.env.VUE_APP_REGISTRY_CONTRACT = registry.address;

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
