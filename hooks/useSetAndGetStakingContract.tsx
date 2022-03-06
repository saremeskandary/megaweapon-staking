import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { mwStakingAddress, weaponAddress } from "../config";
import { useWeaponContract } from "./useContract";

export default function useSetOrGetStakingContract(justGet = false) {
  const { active } = useWeb3React<Web3Provider>();
  const [result, setResult] = useState<string>("empty");
  const [click, setClick] = useState<boolean>(false);
  const contract = useWeaponContract(weaponAddress);

  async function setStakingContract(mwStakingAddress: string) {
    return await contract.setStakingContract(mwStakingAddress);
  }

  async function getStakingContract() {
    return await contract.getStakingContract();
  }

  useEffect(() => {
    if (active && click) {
      let a = async () => {
        if (!justGet) {
          await setStakingContract(mwStakingAddress);
          setResult(await getStakingContract());
        } else setResult(await getStakingContract());
        console.log(result);
      };
      a()
    }
    return setClick(false);
  }, [active, click]);
  return { result, setClick };
}
