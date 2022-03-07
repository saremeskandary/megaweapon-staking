import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { mwStakingAddress, weaponAddress } from "../config";
import { useMW2StakingContract, useWeaponContract } from "./useContract";

export const useClaimData = () => {
  const { account, active } = useWeb3React<Web3Provider>();
  const mwStaking = useMW2StakingContract(mwStakingAddress);
  const weapon = useWeaponContract(weaponAddress);
  const [epochs, setEpochs] = useState<number[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  // TODO delete mock data
  const [data, setData] = useState([
    { id: "45", week: "45", ETH: "3" }, // mock data
    { id: "48", week: "48", ETH: "3" }, // mock data
    { id: "52", week: "52", ETH: "3" }, // mock data
  ]);

  useEffect(() => {
    if (active) {
      async () => {
        let i = 0;
        const max = 20;
        const [stakedBalance, stakeBeginTime, stakeEndTime] =
          await weapon.getStake(account);
        while (i < max) {
          const [epochStartDate, epochPool, epochEth] =
            await mwStaking.getEpoch(i);
            setData([]) // clear data after refreshing
          if (
            stakeBeginTime <= epochStartDate[epochs[i]] + 86400 &&
            stakeEndTime >= epochStartDate[epochs[i] + 1]
          ) {
            const share = (+stakedBalance * 1000000) / epochs[i];
            setData((old) => [
              ...old,
              { id: String(i), week: String(i), ETH: String(share) },
            ]);
          }
          i++;
        }
        console.log("claimable: ", data);
      };
    }
    return setRefresh(false);
  }, [active, refresh]);

  // get eth reward on that week
  return { data, setRefresh, setEpochs };
};
