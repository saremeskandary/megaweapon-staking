import Layout from "../components/Layout";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { weaponAddress } from "../config";
import TokenBalance from "../components/TokenBalance";
import { Caution } from "../components/Caution";
import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useStake } from "../hooks/useStake";
import useMW2StakingContract from "../hooks/useMW2StakingContract";
import { BigNumberish } from "ethers";

export default function stake() {
  const mwStaking = useMW2StakingContract();
  const { account } = useWeb3React<Web3Provider>();
  const [onStake, setOnStake] = useState<boolean>(false);
  const [onPeriod, setOnPeriod] = useState<boolean>(false);
  const [caution, setCaution] = useState<boolean>(false);
  const [stakeAmount, setStakeAmount] = useState<BigNumberish>(1);
  const [unstakeTime, setUnstakeTime] = useState<BigNumberish>(1);
  useEffect(() => {
    (onStake || onPeriod) &&
      stakeAmount &&
      unstakeTime &&
      useStake(account, mwStaking, stakeAmount, unstakeTime);
    return () => {
      setOnStake(false);
      setOnPeriod(false);
    };
  }, [onStake, onPeriod]);

  return (
    <Layout>
      {caution && (
        <Caution
          onCancel={() => {
            setCaution(false);
          }}
        />
      )}
      <Card>
        <div className="flex-1">
          <input
            type="number"
            id="stake"
            className=" text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
            placeholder="stake amount"
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
            <div className="text-lg">Your balance</div>
            <div>
              <TokenBalance tokenAddress={weaponAddress} symbol="$WEAPON" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-stretch p-2">
            <div className="text-lg">Total duration</div>
            <div>3 days, 2 hours, 5 minutes</div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
