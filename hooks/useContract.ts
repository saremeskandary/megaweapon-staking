import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { WEAPON } from "../typechain/WEAPON";
import weapon from "../artifacts/contracts/mw2.sol/WEAPON.json";
import mwStaking from "../artifacts/contracts/mw2_staking.sol/MWStaking.json";
import type { MWStaking } from "../typechain/MWStaking";
import ERC20_ABI from "../contracts/ERC20.json";
import type { ERC20 } from "../contracts/types";

export default function useContract<T extends Contract = Contract>(
  address: string,
  ABI: any
): T | null {
  const { library, account, chainId } = useWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library || !chainId) {
      return null;
    }

    try {
      return new Contract(address, ABI, library.getSigner(account));
    } catch (error) {
      console.error("Failed To Get Contract", error);

      return null;
    }
  }, [address, ABI, library, account]) as T;
}

export function useTokenContract(contractAddress?: string) {
  return useContract<ERC20>(contractAddress, ERC20_ABI);
}

export function useWeaponContract(contractAddress?: string) {
  return useContract<WEAPON>(contractAddress, weapon.abi);
}

export function useMW2StakingContract(contractAddress: string) {
  return useContract<MWStaking>(contractAddress, mwStaking.abi);
}
