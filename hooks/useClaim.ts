import { BigNumberish } from "ethers";
import { MWStaking } from "../typechain/MWStaking";

export const useClaim = async (
  mwStaking: MWStaking,
  epochs: BigNumberish[]
) => {
  mwStaking
    ? await mwStaking.claim(epochs)
    : console.log(
        "you need to connect to your wallet and choose the correct network "
      );
};
