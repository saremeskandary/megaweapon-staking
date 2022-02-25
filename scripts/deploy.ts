// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);

  const Mw2 = await ethers.getContractFactory("mw2");
  const mw2 = await Mw2.deploy("Hello, Hardhat!");
  await mw2.deployed();
  console.log("mw2 deployed to:", mw2.address);

  const Mw2_staking = await ethers.getContractFactory("mw2_staking");
  const mw2_staking = await Mw2_staking.deploy("Hello, Hardhat!");
  await mw2_staking.deployed();
  console.log("mw2_staking deployed to:", mw2_staking.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
