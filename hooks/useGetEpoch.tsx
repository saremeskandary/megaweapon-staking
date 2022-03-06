import { mwStakingAddress } from "../config";
import { useMW2StakingContract } from "./useContract";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

export default function useGetEpoch(_epoch) {
  const { account, active } = useWeb3React<Web3Provider>();
  const [epoch, setEpoch] = useState([]);
  const contract = useMW2StakingContract(mwStakingAddress);

  async function getEpoch(account: string) {
    const staked = await contract?.getEpoch(_epoch);
    return staked;
  }

  useEffect(() => {
    if (active) {
      async () => {
        // [epochStartDate ,epochPool, epochEth]
        setEpoch(await getEpoch(account));
      };
    }
  }, [active]);
  return epoch;
}
