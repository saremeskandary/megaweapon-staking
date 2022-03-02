import { BigNumberish } from "ethers";
import { MWStaking } from "../typechain/MWStaking";

export const useStake = async (
  account: string,
  mwStaking:MWStaking,
  stakeAmount:BigNumberish,
  unstakeTime:BigNumberish
) => {
  await mwStaking.stake(account, stakeAmount, unstakeTime, 0 as BigNumberish);
};
