import useSWR from "swr";
import { ERC20 } from "../contracts/types";
import type { WEAPON } from "../typechain/WEAPON";
import { useWeaponContract } from "./useContract";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";

function getWeaponBalance(contract: WEAPON) {
  return async (_: string, address: string) => {
    const balance = await contract.balanceOf(address);

    return balance;
  };
}

export default function useWeaponBalance(
  address: string,
  tokenAddress: string,
  suspense = false
) {
  const contract = useWeaponContract(tokenAddress);

  const shouldFetch =
    typeof address === "string" &&
    typeof tokenAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["WeaponBalance", address, tokenAddress] : null,
    getWeaponBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
