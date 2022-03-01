// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import hre from "hardhat";
import fs from "fs";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const multiSig = process.env.PRIVATE_KEY as string; // Account #0  Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
  const vault = process.env.PRIVATE_KEY as string; //FIXME
  const epochRobot = process.env.PRIVATE_KEY as string; //FIXME

  const WEAPON = await ethers.getContractFactory("WEAPON");
  const weapon = await WEAPON.deploy(vault, multiSig); //FIXME what is vault and myltysig adresses
  await weapon.deployed();
  console.log("mw2 deployed to:", weapon.address);

  const MWStaking = await ethers.getContractFactory("MWStaking");
  const mwStaking = await MWStaking.deploy(
    weapon.address,
    multiSig,
    epochRobot
  ); //FIXME what is epochRobot
  await mwStaking.deployed();
  console.log("mwStaking deployed to:", mwStaking.address);

  fs.writeFileSync(
    "./config.ts",
  `export const weaponAddress = "${weapon.address}"\nexport const mwStakingAddress = "${mwStaking.address}"`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
