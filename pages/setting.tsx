import Layout from "../components/Layout";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { BigNumberish } from "ethers";
import useSetOrGetStakingContract from "../hooks/useSetAndGetStakingContract";
import useToggleStaking from "../hooks/useToggleStaking";
import { useAddEpochs } from "../hooks/useAddEpochs";

export default function setting() {
  const { setClick } = useSetOrGetStakingContract();
  const { setToggle } = useToggleStaking();
  const { setAddEpoch, setFirstAdd, setNumToAdd } = useAddEpochs();

  return (
    <Layout>
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
      <form action="" className="flex flex-col  px-6 gap-4">
        <Card dark style={{ flexDirection: "column" }}>
          <label>STAKED BALANCE:</label>
          <label htmlFor="ETH amount">FirstAdd</label>
          <input
            type="number"
            id="amountToStake"
            className="bg-white text-black text-center px-2"
            min={0}
            // max={parseBalance(StakedBalance ?? 0, 9, 0)}
            required
            onChange={(e) => {
              e.preventDefault();
              setFirstAdd(e.target.value as BigNumberish);
            }}
          ></input>
          <label htmlFor="ETH amount">NumToAdd</label>
          <input
            type="number"
            id="amountToStake"
            className="bg-white text-black text-center px-2"
            min={0}
            // max={parseBalance(StakedBalance ?? 0, 9, 0)}
            required
            onChange={(e) => {
              e.preventDefault();
              setNumToAdd(e.target.value as BigNumberish);
            }}
          ></input>
        </Card>
        <Button
          type="submit"
          full
          kind="dark"
          content="[ CONFIRM ]"
          onClick={() => setAddEpoch(true)}
        />
      </form>
    </Layout>
  );
}
