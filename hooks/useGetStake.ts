import useSWR from "swr";
import type { WEAPON } from "../typechain/WEAPON";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useWeaponContract from "./useWeaponContract";

function getGetStake(contract: WEAPON) {
  return async (_: string, address: string) => {
    const staked = await contract.getStake(address);
    return staked;
  };
}

export default function useGetStake(address: string, suspense = false) {
  const contract = useWeaponContract();
  const shouldFetch = typeof address === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["GetStake", address] : null,
    getGetStake(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
