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

  const multiSig = "0x0"; //FIXME
  const vault = "0x0"; //FIXME
  const epochRobot = "0x0"; //FIXME

  const WEAPON = await ethers.getContractFactory("WEAPON");
  const weapon = await WEAPON.deploy(vault, multiSig); //FIXME what is vault and myltysig adresses
  await weapon.deployed();
  console.log("mw2 deployed to:", weapon.address);

  const MWStaking = await ethers.getContractFactory("MWStaking");
  const mwStaking = await MWStaking.deploy(weapon.address, multiSig, epochRobot); //FIXME what is epochRobot
  await mwStaking.deployed();
  console.log("mwStaking deployed to:", mwStaking.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
