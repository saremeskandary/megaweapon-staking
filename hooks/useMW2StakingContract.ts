import mwStaking from "../artifacts/contracts/mw2_staking.sol/MWStaking.json";
import { mwStakingAddress } from "../config";
import type { MWStaking } from "../typechain/MWStaking";
import useContract from "./useContract";

export default function useMW2StakingContract() {
  return useContract<MWStaking>(mwStakingAddress, mwStaking.abi);
}
