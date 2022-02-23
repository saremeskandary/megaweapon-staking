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

      <Card dark>

      </Card>
    </Layout>
  );
}
