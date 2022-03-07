import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { BigNumberish } from "ethers";
import { useEffect, useState } from "react";
import { mwStakingAddress } from "../config";
import { useMW2StakingContract } from "./useContract";
import { MWStaking } from "../typechain/MWStaking";

export const useClaim = () => {
  const mwStaking = useMW2StakingContract(mwStakingAddress);
  const { active } = useWeb3React<Web3Provider>();
  const [click, setClick] = useState(false);
  const [epochs, setEpochs] = useState<BigNumberish[]>();

  useEffect(() => {
    if (active && click) {
      const a = async () => {
        await mwStaking.claim(epochs);
      };
      a();
    }
    return () => {
      setClick(false);
    };
  }, [active, click]);
  return { setClick, setEpochs };
};
