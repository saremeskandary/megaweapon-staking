import useSWR from "swr";
import { weaponAddress } from "../config";
import type { WEAPON } from "../typechain/WEAPON";
import { useWeaponContract } from "./useContract";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";

function getStakeBalance(contract: WEAPON) {
  return async (_: string, address: string) => {
    const balance = await contract.stakedBalanceOf(address);
    return balance;
  };
}

export default function useStakeBalance(
  address: string,
  tokenAddress: string,
  suspense = false
) {
  const contract = useWeaponContract(weaponAddress);
  const shouldFetch =
    typeof address === "string" &&
    typeof tokenAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["StakeBalance", address, tokenAddress] : null,
    getStakeBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
