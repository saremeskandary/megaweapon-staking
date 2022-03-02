import useMW2StakingContract from "./useMW2StakingContract";

async function useClaim(epochs: bigint[]) {
  const mwStaking = useMW2StakingContract();
  const claim = await mwStaking.claim(epochs);
  await claim.wait();
  // TODO load staked balance
  console.log("claimed");
}
