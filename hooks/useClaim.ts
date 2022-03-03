import { BigNumberish } from "ethers";
import { MWStaking } from "../typechain/MWStaking";

export const useClaim = async (
  mwStaking: MWStaking,
  epochs: BigNumberish[],
) => {
  await mwStaking.claim(epochs);
};