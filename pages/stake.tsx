import Layout from "../components/Layout";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Caution({ onCancel }) {
  return (
    <div className="flex flex-col py-2 px-4 mb-4 gap-2 w-80 border-2 rounded-md border-red-800 bg-alarm">
      <h2 className="text-xl self-center font-consolab px-2 rounded-md bg-cardbg-light text-red-600 ">
        Caution!
      </h2>
      <p className="text-lg font-consolaz rounded-md bg-cardbg-light p-2">
        You're about to lose money. Claim your ETH rewards before you unstake.
      </p>
      <div className="flex flex-row self-end gap-2">
        <button
          onClick={onCancel}
          className="border-b-4 text-base border-transparent hover:border-red-600 "
        >
          Close
        </button>
        <Link href="/claim">
          <a className="border-b-4 text-base border-transparent hover:border-green-700">
            Claim
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function stake() {
  const [caution, setCaution] = useState<boolean>(false);
  return (
    <Layout>
      {caution  && (
        <Caution
          onCancel={() => {
            setCaution(false);
          }}
        />
      )}
      <Card>
        <div className="flex-1">
          <input
            type="number"
            id="stake"
            className=" text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
            placeholder="stake amount"
            required
          />
        </div>

        <Button
          full
          kind="light"
          content="Stake"
          lock="icon-stake"
          onClick={() => {setCaution(true)}}
        />
      </Card>

      <Card>
        <div className="flex-1 h-full">
          <input
            type="date"
            id="stake"
            className="text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
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
            <div className="text-lg">Your balance</div>
            <div>3 $WEPON</div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-stretch p-2">
            <div className="text-lg">Total duration</div>
            <div>3 day, 2 hours, 5 minutes</div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
