import Layout from "../components/Layout";
import Image from "next/image";
import { Card } from "../components/Card";

export default function stake() {
  return (
    <Layout>
      <Card>
        <input type="number" placeholder="stake amount" />
        <div className="flex flex-row items-center gap-1 border-night border-2 px-4">
          <div className="">Stake</div>
          <Image
            src="/../public/assets/icon-addstake-default.png"
            alt="lock"
            width="20"
            height="25"
          />
        </div>
      </Card>

      <Card>
        <input type="number" placeholder="stake amount" />
        <div className="flex flex-row items-center gap-1 border-night border-2 px-4">
          <div className="">Set staking period</div>
          <Image
            src="/../public/assets/icon-addstake-default.png"
            alt="lock"
            width="20"
            height="25"
          />
        </div>
      </Card>
      <Card>
        <div className="flex flex-col w-full">
          <div className="flex flex-row flex-wrap justify-between w-full p-2">
            <div>Your balance</div>
            <div>3 $WEPON</div>
          </div>
          <div className="flex flex-row flex-wrap justify-between w-full p-2">
            <div>Total duration</div>
            <div>3 day, 2 hours, 5 minutes</div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
