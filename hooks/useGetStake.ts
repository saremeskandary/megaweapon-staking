import useSWR from "swr";
import { weaponAddress } from "../config";
import type { WEAPON } from "../typechain/WEAPON";
import { useWeaponContract } from "./useContract";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";

function getGetStake(contract: WEAPON) {
  return async (_: string, address: string) => {
    const staked = await contract.getStake(address);
    return staked;
  };
}

export default function useGetStake(address: string, tokenAddress: string, suspense = false) {
  const contract = useWeaponContract(weaponAddress);
  const shouldFetch =
    typeof address === "string" &&
    typeof tokenAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["GetStake", address, tokenAddress] : null,
    getGetStake(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
