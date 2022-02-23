import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Layout from "../components/Layout";

type Props = {};

export default function unstake({}: Props) {
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

      <form action="" className="flex flex-col max-w-sm w-60 px-6 gap-2">
        <Card dark>
          HOW MUCH WEAPON are you unstaking?
        </Card>

        <Card dark style={{ flexDirection: "column" }}>
          <label>STAKED BALANCE:</label>
          <input type="number" id="number" required></input>
          <label htmlFor="ETH amount">AMOUNT TO UNSTAKE:</label>
          <input type="number" id="number" required></input>
        </Card>
        <Button full kind="dark" content="[ CONFIRM ]" onClick={() => {}} />
      </form>
    </Layout>
  );
}
