import { mwStakingAddress } from "../config";
import { useMW2StakingContract } from "./useContract";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { MWStaking } from "../typechain/MWStaking";
import useSWR from "swr";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import { BigNumberish } from "ethers";

export default function useGetEpoch(_epoch) {
  const { active } = useWeb3React<Web3Provider>();
  const [epoch, setEpoch] = useState([]);
  const [click, setClick] = useState<boolean>(false);
  const contract = useMW2StakingContract(mwStakingAddress);

  useEffect(() => {
    if (active) {
      let a = async () => {
        setEpoch(await contract.getEpoch(_epoch));
      };
    }
    return setClick(false);
  }, [click]);
  return {epoch, setClick};
}