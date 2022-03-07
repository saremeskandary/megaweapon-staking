import Layout from "../components/Layout";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { BigNumberish } from "ethers";
import useSetOrGetStakingContract from "../hooks/useSetAndGetStakingContract";
import useToggleStaking from "../hooks/useToggleStaking";
import { useAddEpochs } from "../hooks/useAddEpochs";
import useSetPoolSize from "../hooks/useSetPoolSize";
import { useClaimData } from "../hooks/useClaimData";

export default function setting() {
  const { setClick } = useSetOrGetStakingContract();
  const { setToggle } = useToggleStaking();
  const { setAddEpoch, setFirstAdd, setNumToAdd } = useAddEpochs();
  const { setClick: setClickPoolSize, setPoolSize } = useSetPoolSize();
  const { data, setRefresh } = useClaimData();

  return (
    <Layout>
      <div className="bg-cardbg-light border-4 p-2 border-yellow-600 rounded-xl"> just multiSig address can use the setting </div>
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
          <label>Add Epochs(limit 20 epochs):</label>
          <label htmlFor="ETH amount">FirstAdd</label>
          <input
            type="number"
            id="amountToStake"
            className="bg-white text-black text-center px-2"
            min={0}
            max={1}
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
            max={20}
            required
            onChange={(e) => {
              e.preventDefault();
              setNumToAdd(e.target.value as BigNumberish);
            }}
          ></input>{" "}
          <Button
            type="submit"
            full
            kind="light"
            content="[ CONFIRM ]"
            onClick={(e) => {
              e.preventDefault();
              setAddEpoch(true);
            }}
          />
        </Card>
      </form>
      <form action="" className="flex flex-col  px-6 gap-4">
        <Card dark style={{ flexDirection: "column" }}>
          <label>SET POOLSIZE:</label>
          <input
            type="number"
            id="amountToStake"
            className="bg-white text-black text-center px-2"
            min={0}
            max={20}
            required
            onChange={(e) => {
              e.preventDefault();
              setPoolSize(e.target.value as BigNumberish);
            }}
          ></input>
          <Button
            type="submit"
            full
            kind="light"
            content="[ CONFIRM ]"
            onClick={(e) => {
              e.preventDefault();
              setClickPoolSize(true);
            }}
          />
        </Card>
      </form>
      <Button
        kind="light"
        content="claim data (for test see the log)"
        lock="icon-stake"
        onClick={() => {
          setRefresh(true);
        }}
      />
    </Layout>
  );
}
