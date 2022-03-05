import useSWR from "swr";
import type { ERC20 } from "../contracts/types";
import { useTokenContract } from "./useContract";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";

function getTokenBalance(contract: ERC20) {
  return async (_: string, address: string) => {
    const balance = await contract.balanceOf(address);

    return balance;
  };
}

export default function useTokenBalance(
  address: string,
  contractAddress: string,
  suspense = false
) {
  const contract = useTokenContract(contractAddress);

  const shouldFetch =
    typeof address === "string" &&
    typeof contractAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["TokenBalance", address, contractAddress] : null,
    getTokenBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}
