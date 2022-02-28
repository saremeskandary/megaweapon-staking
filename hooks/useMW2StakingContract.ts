import MWStaking_ABI from "../artifacts/contracts/mw2_staking.sol/MWStaking.json";
import type { MWStaking } from "../typechain/MWStaking";
import useContract from "./useContract";

export default function useMW2StakingContract(tokenAddress?: string) {
  return useContract<MWStaking>(tokenAddress, MWStaking_ABI);
}
