import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { weaponAddress } from "../config";
import { useWeaponContract } from "./useContract";

export default function useGetStake() {
  const { account, active } = useWeb3React<Web3Provider>();
  const [Stake, setStake] = useState([]);
  const contract = useWeaponContract(weaponAddress);

  async function getStake(account: string) {
    const staked = await contract.getStake(account);
    return staked;
  }

  useEffect(() => {
    if (active) {
      async () => {
        // [stakedBalance, stakeBeginTime, stakeEndTime]
        setStake(await getStake(account));
      };
    } else console.log("wallet its not active");
  }, [active]);
  return Stake;
}
