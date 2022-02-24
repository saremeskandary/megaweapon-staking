import Layout from "../components/Layout";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import Image from "next/image";

export default function stake() {
  return (
    <Layout>
      <Card>
        <div className="flex-1">
          <input
            type="number"
            id="stake"
            className=" text-center text-sm block w-full h-full border-2 border-black dark:bg-white"
            placeholder="stake amount"
            required
          />
        </div>

        <Button
          full
          kind="light"
          content="Stake"
          lock="icon-stake"
          onClick={() => {}}
        />
      </Card>

      <Card>
        <div className="flex-1">
          <input
            type="date"
            id="stake"
            className=" text-center text-sm block w-full h-full border-2 border-black dark:bg-white"
            required
          />
        </div>
        <Button
          full
          kind="light"
          content="Set staking period"
          lock="icon-stake"
          onClick={() => {}}
        />
      </Card>

      <Card>
        <div className="flex flex-col w-full justify-center items-center md:items-stretch">
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-stretch p-2">
            <div className="text-base">Your balance</div>
            <div>3 $WEPON</div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-stretch p-2">
            <div className="text-base">Total duration</div>
            <div>3 day, 2 hours, 5 minutes</div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
