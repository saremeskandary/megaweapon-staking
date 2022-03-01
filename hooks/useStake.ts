import useSWR from "swr";
import type { MWStaking } from "../typechain/MWStaking";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useTokenContract from "./useTokenContract";
import useMW2StakingContract from "./useMW2StakingContract";
import { BigNumberish } from "ethers";

function stake(contract: MWStaking) {
  return async (
    account: string,
    amount: BigNumberish,
    unstakeTime: BigNumberish,
    adjustedStake: BigNumberish
  ) => {
    const stake = await contract.stake(
      account,
      amount,
      unstakeTime,
      adjustedStake
    );

    return stake;
  };
}

export default function useStake(
  account: string,
  amount: BigNumberish,
  unstakeTime: BigNumberish,
  adjustedStake: BigNumberish,
  MWStakingAddress: string
) {
  const contract = useMW2StakingContract();

  const shouldFetch =
    typeof address === "string" &&
    typeof MWStakingAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["TokenBalance", address, tokenAddress] : null,
    getTokenBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
