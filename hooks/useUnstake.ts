import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useMW2StakingContract from "./useMW2StakingContract";

async function useUnstake(unstakeAmount: bigint, adjustedStake: bigint) {
  const mwStaking = useMW2StakingContract();
  const { account } = useWeb3React<Web3Provider>();
  const unstaking = await mwStaking.unstake(
    account,
    unstakeAmount,
    adjustedStake
  );
  await unstaking.wait();
  // TODO load staked balance
  console.log("unstaked");
}
