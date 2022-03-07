import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { weaponAddress } from "../config";
import { useWeaponContract } from "./useContract";
import useSWR from "swr";
import type { WEAPON } from "../typechain/WEAPON";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";


// export default function useGetStake() {
//   const { account, active } = useWeb3React<Web3Provider>();
//   const [Stake, setStake] = useState([]);
//   const contract = useWeaponContract(weaponAddress);

//   async function getStake(account: string) {
//     const staked = await contract.getStake(account);
//     return staked;
//   }

//   useEffect(() => {
//     if (active) {
//       async () => {
//         // [stakedBalance, stakeBeginTime, stakeEndTime]
//         setStake(await getStake(account));
//       };
//     } else console.log("wallet its not active yet");
//   }, [active]);
//   return Stake;
// }




function getStake(contract: WEAPON) {
  return async (_: string, address: string) => {
    const balance = await contract.getStake(address);

    return balance;
  };
}

export default function useGetStake(
  address: string,
  contractAddress: string,
  suspense = false
) {
  const contract = useWeaponContract(contractAddress);

  const shouldFetch =
    typeof address === "string" &&
    typeof contractAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["getStake", address, contractAddress] : null,
    getStake(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
