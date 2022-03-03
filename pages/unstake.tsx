import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useMW2StakingContract from "../hooks/useMW2StakingContract";
import { useUnstake } from "../hooks/useUnstake";
import useStakeBalance from "../hooks/useStakeBalance";
import useWeaponContract from "../hooks/useWeaponContract";
import { parseBalance } from "../util";
import { BigNumberish } from "ethers";

type Props = {};
// TODO get max stake balance and show it in input
export default function unstake({}: Props) {
  const { account } = useWeb3React<Web3Provider>();
  const mwStaking = useMW2StakingContract();
  const weapon = useWeaponContract();
  const [onUnstake, setOnUnstake] = useState<boolean>(false);
  const [unstakeAmount, setUnstakeAmount] = useState<BigNumberish>();
  const { data } = useStakeBalance(account);
  useEffect(() => {
    onUnstake && unstakeAmount && useUnstake(mwStaking, account, unstakeAmount);
    return setOnUnstake(false);
  }, [onUnstake]);

  function onUnstakeHandler(e) {
    e.preventDefault();
    setOnUnstake(true);
  }
  return (
    <Layout>
      <div className="flex self-start">
        <Button
          kind="dark"
          content="unstake $WEAPON"
          lock="icon-stake"
          onClick={() => {}}
        />
      </div>

      <form action="" className="flex flex-col  px-6 gap-4">
        <Card dark>HOW MUCH WEAPON are you unstaking?</Card>

        <Card dark style={{ flexDirection: "column" }}>
          <label>STAKED BALANCE:</label>
          <div className="bg-white text-black text-center px-2">
            {parseBalance(data ?? 0)}
          </div>
          <label htmlFor="ETH amount">AMOUNT TO UNSTAKE:</label>
          <input
            type="number"
            id="amountToStake"
            className="bg-white text-black text-center px-2"
            min={0}
            max={parseBalance(data ?? 0)}
            required
            onChange={(e) => {
              e.preventDefault();
              setUnstakeAmount(e.target.value as BigNumberish);
            }}
          ></input>
        </Card>
        <Button
          full
          kind="dark"
          content="[ CONFIRM ]"
          onClick={onUnstakeHandler}
        />
      </form>
    </Layout>
  );
}
