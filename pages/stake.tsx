import Layout from "../components/Layout";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

export default function stake() {
  return (
    <Layout>
      <Button
        kind="light"
        content="stake $WEAPON"
        lock="icon-stake"
        onClick={() => {}}
      />
      <Button
        kind="light"
        content="add to stake"
        lock="icon-addstake"
        onClick={() => {}}
      />
      <Button
        kind="light"
        content="extend stake"
        lock="icon-extendstake"
        onClick={() => {}}
      />

      <Card>
        <div className="flex flex-col w-full justify-center items-center md:items-stretch">
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-stretch p-2">
            <div>Your balance</div>
            <div>3 $WEPON</div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-stretch p-2">
            <div>Total duration</div>
            <div>3 day, 2 hours, 5 minutes</div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
