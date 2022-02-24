import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Layout from "../components/Layout";

type Props = {};

export default function claim({}: Props) {
  return (
    <Layout>
      <div className="flex self-start">
        <Button
          kind="dark"
          content="claim ETH"
          lock="icon-claim"
          onClick={() => {}}
        />
      </div>

      <form action="" className="flex flex-col px-6 gap-2">
        <Card dark style={{ flexDirection: "column" }}>
          <label>ETH REWARD AVAILABLE:</label>
          <input type="number" id="number" required></input>
          <label htmlFor="ETH amount">AMOUNT TO CLAIM:</label>
          <input type="number" id="number" required></input>
        </Card>
        <Button full kind="dark" content="[ CONFIRM ]" onClick={() => {}} />
      </form>
    </Layout>
  );
}
