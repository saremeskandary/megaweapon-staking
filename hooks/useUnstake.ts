import { BigNumberish } from "@ethersproject/bignumber";
import { MWStaking } from "../typechain/MWStaking";

export const useUnstake = async (
  mwStaking: MWStaking,
  account: string,
  unstakeAmount: BigNumberish
) => {
  mwStaking
    ? await mwStaking.unstake(
        account,
        unstakeAmount as BigNumberish,
        0 as BigNumberish
      )
    : console.log(
        "you need to connect to your wallet and choose the correct network "
      );
};
