import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { weaponAddress } from "../config";
import { useWeaponContract } from "./useContract";

export default function useToggleStaking() {
  const { active } = useWeb3React<Web3Provider>();
  const [toggle, setToggle] = useState<boolean>(false);
  const contract = useWeaponContract(weaponAddress);

  useEffect(() => {
    if (active && toggle) {
      let a = async () => {
        await contract.toggleStaking();
        console.log('toggled successfully');
      };
      a();
    }
    return setToggle(false);
  }, [active, toggle]);
  return { setToggle };
}
