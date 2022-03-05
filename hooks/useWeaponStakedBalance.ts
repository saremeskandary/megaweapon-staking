import { BigNumberish } from "ethers";
import useSWR from "swr";
import { weaponAddress } from "../config";
import type { WEAPON } from "../typechain/WEAPON";
import { useWeaponContract } from "./useContract";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";


function getWeaponStakedBalance(contract: WEAPON) {
  return async (address: string) => {
    const balance = await contract.stakedBalanceOf(address);

    return balance;
  };
}

export default function useWeaponStakedBalance(
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
    shouldFetch ? ["WeaponStakedBalance", address, tokenAddress] : null,
    getWeaponStakedBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
