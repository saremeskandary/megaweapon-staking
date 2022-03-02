import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useMW2StakingContract from "./useMW2StakingContract";

async function useStake(
  stakeAmount: bigint,
  unstakeTime: bigint,
  adjustedStake: bigint
) {
  const mwStaking = useMW2StakingContract();
  const { account } = useWeb3React<Web3Provider>();
  const staking = await mwStaking.stake(
    account,
    stakeAmount,
    unstakeTime,
    adjustedStake
  );
  await staking.wait();
  // TODO load staked balance
  console.log("staked");
}
