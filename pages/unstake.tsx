import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Layout from "../components/Layout";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useUnstake } from "../hooks/useUnstake";
import { parseBalance } from "../util";
import { BigNumberish } from "ethers";
import { weaponAddress } from "../config";
import useWeaponStakedBalance from "../hooks/useWeaponStakedBalance";

type Props = {};
// TODO get max stake balance and show it in input
export default function unstake({}: Props) {
  const { account } = useWeb3React<Web3Provider>();
  const { data: StakedBalance } = useWeaponStakedBalance(
    account,
    weaponAddress
  );
  const { setOnUnstake, setUnstakeAmount } = useUnstake();

  return (
    <Layout>
      <div className="flex self-start">
        <Button
          type="submit"
          kind="dark"
          content="unstake $WEAPON"
          lock="icon-stake"
          onClick={(e) => {
            e.preventDefault();
            setOnUnstake(true);
          }}
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setOnUnstake(true);
        }}
        className="flex flex-col  px-6 gap-4"
      >
        <Card dark>HOW MUCH $WEAPON are you unstaking?</Card>

        <Card dark style={{ flexDirection: "column" }}>
          <label>STAKED BALANCE:</label>
          <div className="bg-white text-black text-center px-2">
            {parseBalance(StakedBalance ?? 0, 9, 0)}
          </div>
          <label htmlFor="ETH amount">AMOUNT TO UNSTAKE:</label>
          <input
            type="number"
            id="amountToStake"
            className="bg-white text-black text-center px-2"
            min={0}
            // max={parseBalance(StakedBalance ?? 0, 9, 0)}
            required
            onChange={(e) => {
              e.preventDefault();
              setUnstakeAmount(e.target.value as BigNumberish);
            }}
          ></input>
        </Card>
        <Button type="submit" full kind="dark" content="[ CONFIRM ]" />
      </form>
    </Layout>
  );
}
