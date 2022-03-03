import useSWR from "swr";
import type { WEAPON } from "../typechain/WEAPON";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useWeaponContract from "./useWeaponContract";

function getWeaponStakedBalance(contract: WEAPON) {
  return async (_: string, address: string) => {
    const balance = await contract.stakedBalanceOf(address);

    return balance;
  };
}

export default function useWeaponStakedBalance(address: string, suspense = false) {
  const contract = useWeaponContract();

  const shouldFetch = typeof address === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["WeaponBalance", address] : null,
    getWeaponStakedBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
