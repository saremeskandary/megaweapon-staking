import useSWR from "swr";
import type { WEAPON } from "../typechain/WEAPON";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useWeaponContract from "./useWeaponContract";

function getWeaponBalance(contract: WEAPON) {
  return async (_: string, address: string) => {
    const balance = await contract.stakedBalanceOf(address);

    return balance;
  };
}

export default function useWeaponBalance(address: string, suspense = false) {
  const contract = useWeaponContract();

  const shouldFetch = typeof address === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["WeaponBalance", address] : null,
    getWeaponBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
