import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useMW2StakingContract from "../hooks/useMW2StakingContract";
import { useUnstake } from "../hooks/useUnstake";

type Props = {};

export default function unstake({}: Props) {
  const [onStake, setOnUnstake] = useState<boolean>(false);
  const [caution, setCaution] = useState<boolean>(false);
  const mwStaking = useMW2StakingContract();
  const { account } = useWeb3React<Web3Provider>();
  const [unstakeAmount, setUnstakeAmount] = useState();

  useEffect(() => {
    onStake && unstakeAmount && useUnstake(mwStaking, account, unstakeAmount);
    return setOnUnstake(false);
  }, [onStake]);
  function onUnstakeHandler(e) {
    setOnUnstake(true);
    setUnstakeAmount(e.target.stakedBalance);
    console.log();
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
          <input type="number" id="stakedBalance" required></input>
          <label htmlFor="ETH amount">AMOUNT TO UNSTAKE:</label>
          <input type="number" id="amountToStake" required></input>
        </Card>
        <Button
          full
          kind="dark"
          content="[ CONFIRM ]"
          onSubmit={() => {
            onUnstakeHandler;
          }}
        />
      </form>
    </Layout>
  );
}
