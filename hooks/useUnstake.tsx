import { BigNumberish } from "@ethersproject/bignumber";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useState, useEffect } from "react";
import { mwStakingAddress } from "../config";
import { useMW2StakingContract } from "./useContract";

export const useUnstake = () => {
  const mwStaking = useMW2StakingContract(mwStakingAddress);
  const { account, active } = useWeb3React<Web3Provider>();
  const [onUnstake, setOnUnstake] = useState<boolean>(false);
  const [unstakeAmount, setUnstakeAmount] = useState<BigNumberish>();

  useEffect(() => {
    if (active && onUnstake) {
      const a = async () => {
        await mwStaking.unstake(
          account,
          unstakeAmount as BigNumberish,
          0 as BigNumberish
        );
      };
      a();
    }
    return () => {
      setOnUnstake(false);
    };
  }, [active, onUnstake]);
  return { setOnUnstake, setUnstakeAmount };
};
