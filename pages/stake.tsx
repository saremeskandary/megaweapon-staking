import Layout from "../components/Layout";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { mwStakingAddress, weaponAddress } from "../config";
import { Caution } from "../components/Caution";
import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useStake } from "../hooks/useStake";
import { BigNumberish } from "ethers";
import { parseBalance } from "../util";
import useWeaponBalance from "../hooks/useWeaponBalance";
import { useMW2StakingContract, useWeaponContract } from "../hooks/useContract";
import useGetStake from "../hooks/useGetStake";
import CalculateTimeLeft from "../components/CalculateTimeLeft";
import useSetOrGetStakingContract from "../hooks/useSetAndGetStakingContract";
import useToggleStaking from "../hooks/useToggleStaking";

export default function stake() {
  const mwStaking = useMW2StakingContract(mwStakingAddress);
  const weapon = useWeaponContract(weaponAddress);
  const { account, active } = useWeb3React<Web3Provider>();
  const [onStake, setOnStake] = useState<boolean>(false);
  const [onPeriod, setOnPeriod] = useState<boolean>(false);
  const [caution, setCaution] = useState<boolean>(false);
  const [stakeAmount, setStakeAmount] = useState<BigNumberish>();
  const [unstakeTime, setUnstakeTime] = useState<BigNumberish>();
  const { data } = useWeaponBalance(account, weaponAddress);
  const [stakedBalance, stakeBeginTime, stakeEndTime] = useGetStake();
  const { setClick } = useSetOrGetStakingContract();
  const { setToggle } = useToggleStaking();

  useEffect(() => {
    (onStake || onPeriod) &&
      stakeAmount &&
      unstakeTime &&
      active &&
      useStake(mwStaking, account, stakeAmount, unstakeTime);
    return () => {
      setOnStake(false);
      setOnPeriod(false);
    };
  }, [onStake, onPeriod]);

  // TODO if claim data is  : show caution

  return (
    <Layout>
      {caution && (
        <Caution
          onCancel={() => {
            setCaution(false);
          }}
        />
      )}
      <Button
        kind="light"
        content="set staking contract"
        lock="icon-stake"
        onClick={() => {
          setClick(true);
        }}
      />
      <Button
        kind="light"
        content="toggle staking"
        lock="icon-stake"
        onClick={() => {
          setToggle(true);
        }}
      />
      <Card>
        <div className="flex-1">
          <input
            type="number"
            id="stake"
            className=" text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
            placeholder="stake amount"
            min={0}
            max={parseBalance(data ?? 0, 9, 0)}
            onChange={(e) => {
              e.preventDefault();
              setStakeAmount(e.target.value as BigNumberish);
            }}
            required
          />
        </div>

        <Button
          full
          kind="light"
          content="Stake"
          lock="icon-stake"
          onClick={(e) => {
            e.preventDefault();
            setOnStake(true);
          }}
        />
      </Card>
      <Card>
        <div className="flex-1 h-full">
          <input
            type="date"
            id="stake"
            className="text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
            required
            onChange={(e) => {
              e.preventDefault();
              setUnstakeTime(e.target.valueAsNumber as BigNumberish);
            }}
          />
        </div>
        <Button
          full
          kind="light"
          content="Set staking period"
          lock="icon-stake"
          onClick={(e) => {
            e.preventDefault();
            setOnPeriod(true);
          }}
        />
      </Card>
      <Card>
        <div className="flex flex-col w-full justify-center items-center md:items-stretch">
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-stretch p-2">
            <div className="text-lg">Your staked balance</div>
            <div>{parseBalance(stakedBalance ?? 0, 9, 0)} $WEAPON</div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-stretch p-2">
            <div className="text-lg">Total duration</div>
            <div>
              {parseBalance(stakeEndTime ?? 0, 0, 0) ? (
                <CalculateTimeLeft a={stakeEndTime} b={new Date()} />
              ) : (
                <div>0 days, 0 hours, 0 minutes</div>
              )}
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col w-full justify-center items-center md:items-stretch">
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-stretch p-2">
            <div className="text-lg">Your unstaked balance</div>
            <div>
              <div>{parseBalance(data ?? 0, 9, 0)} $WEAPON</div>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
