// import { Web3Provider } from "@ethersproject/providers";
// import { useWeb3React } from "@web3-react/core";
// import { BigNumberish } from "ethers";
// import { MWStaking } from "../typechain/MWStaking";
// import { WEAPON } from "../typechain/WEAPON";

// export const useGetEpoch = async (
//   mwStaking: MWStaking,
//   epoch: BigNumberish
// ) => {
//   const { epochStartDate, epochPool, epochEth } = await mwStaking.getEpoch(
//     epoch
//   );
//   return { epochStartDate, epochPool, epochEth };
// };

// export const useGetStake = async (weapon: WEAPON, account: string) => {
//   const [_stakedBalance, _stakeBeginTime, _stakeEndTime] =
//     await weapon.getStake(account);
//   return [_stakedBalance, _stakeBeginTime, _stakeEndTime];
// };

// // TODO Check values from getStake(account) against getEpoch(week)

// // const { account } = useWeb3React<Web3Provider>();
// // const weapon = useWeaponContract();

// // const i = 0;
// // const max = epochs.length;
// // const weiToPay = 0;
// // let _stakedBalance, _stakeBeginTime, _stakeEndTime;
// // const a = async () => {
// //   [_stakedBalance, _stakeBeginTime, _stakeEndTime] = await weapon.getStake(
// //     account
// //   );
// // };
// // // require (_stakedBalance > 0, "cannot claim without staked balance");
// // if (_stakedBalance > 0) {
// //   while (i < max) {
// //     // require (currentEpoch > epochs[i], "epoch not closed");
// //     // require (_stakeBeginTime <= _epochStart[epochs[i]] + 86400  && _stakeEndTime >= _epochStart[epochs[i] +1], "not eligible for this epoch");
// //     // require (!_hasClaimedWeek[_msgSender()][epochs[i]], "already claimed");

// //     const share = (_stakedBalance * 1000000) / _epochPoolSize[epochs[i]];
// //     weiToPay += (share * _epochRewards[epochs[i]]) / 1000000;
// //     _hasClaimedWeek[account][epochs[i]] = true;
// //     i++;
// //   }
// // }

// const { account } = useWeb3React<Web3Provider>();
// const mwStaking = useMW2StakingContract();
// const weapon = useWeaponContract();
// const weekNumer = 52 - 1;
// const currentEpoch = mwStaking.currentEpoch();

// useGetStake(weapon, account)
// useGetEpoch(mwStaking, weekNumer)

// const i = 0;
// const max = epochs.length;
// const weiToPay = 0;

// while (i < max) {

  
// }