import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { mwStakingAddress } from "../config";
import { useMW2StakingContract } from "./useContract";

export default function useSetPoolSize() {
  const { active } = useWeb3React<Web3Provider>();
  const [click, setClick] = useState<boolean>(false);
  const contract = useMW2StakingContract(mwStakingAddress);

  useEffect(() => {
    if (active && click) {
      let a = async () => {
          await contract.setPoolSize(mwStakingAddress);
      };
      a();
    }
    return setClick(false);
  }, [active, click]);
  return { setClick };
}
