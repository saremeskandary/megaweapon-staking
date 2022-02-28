import useSWR from "swr";
import type { MWStaking } from "../typechain/MWStaking";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useTokenContract from "./useTokenContract";
import useMW2StakingContract from "./useMW2StakingContract";

function getTokenBalance(contract: MWStaking) {
  return async (_: string, address: string) => {
    const balance = await contract.stake();

    return balance;
  };
}

export default function useStake(
  account: string,
  amount: string,
  unstakeTime: string,
  adjustedStake: string
) {
  const contract = useMW2StakingContract();

  const shouldFetch =
    typeof address === "string" &&
    typeof tokenAddress === "string" &&
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
