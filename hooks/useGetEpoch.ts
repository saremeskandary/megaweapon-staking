import { BigNumberish } from "@ethersproject/bignumber";
import { MWStaking } from "../typechain/MWStaking";

export const useGetEpoch = async (
  mwStaking: MWStaking,
  epoch: BigNumberish
) => {
  if (mwStaking) {
    const { epochStartDate, epochPool, epochEth } = await mwStaking.getEpoch(
      epoch
    );
    return { epochStartDate, epochPool, epochEth };
  } else
    console.log(
      "you need to connect to your wallet and choose the correct network "
    );
};
