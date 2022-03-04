import { BigNumberish } from "ethers";
import { MWStaking } from "../typechain/MWStaking";

export const useStake = async (
  mwStaking: MWStaking,
  account: string,
  stakeAmount: BigNumberish,
  unstakeTime: BigNumberish
) => {
  mwStaking
    ? await mwStaking.stake(
        account,
        stakeAmount,
        unstakeTime,
        0 as BigNumberish
      )
    : console.log(
        "you need to connect to your wallet and choose the correct network "
      );
};
