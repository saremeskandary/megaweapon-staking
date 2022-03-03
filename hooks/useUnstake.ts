import { BigNumberish } from "@ethersproject/bignumber";
import { MWStaking } from "../typechain/MWStaking";

export const useUnstake = async (
  mwStaking: MWStaking,
  account: string,
  unstakeAmount: BigNumberish
) => {
  await mwStaking.unstake(account, unstakeAmount, 0 as BigNumberish);
};
