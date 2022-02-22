import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import useEagerConnect from "../hooks/useEagerConnect";
import Account from "./Account";
import Image from "next/image";
import { useState } from "react";

function NavImage(props: { name: string }) {
  const [selected, setSelected] = useState<boolean>(false);
  const height = "40",
    width = "150";
  return (
    <div
      className={`flex item-center text-center text-night ${
        selected && "gray-100"
      }`}
      onMouseOver={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <div className="absolute">
        {selected ? (
          <Image
            src={`/../public/assets/btn-header-mode-default.png`}
            alt={props.name}
            width={width}
            height={height}
          />
        ) : (
          <Image
            src={`/../public/assets/btn-header-mode-selected.png`}
            alt={props.name}
            width={width}
            height={height}
          />
        )}
      </div>
      <div
        className={`absolute px-6  ${
          selected ? "text-night" : "text-gray-200"
        }`}
      >
        {props.name}
      </div>
    </div>
  );
}

export default function Header({ children }: any) {
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;
  return (
    <div>
      <header>
        <div className="flex justify-center bg-header w-screen border-b-2 border-black shadow-black shadow-md">
          <div className="flex justify-center self-center sm:w-1/2 w-full">
            <div className="w-full item-center">
              <div className="flex flex-row  flex-wrap w-full items-center justify-center md:justify-between">
                <div className="flex flex-row justify-between gap-1 p-1">
                  <Image
                    src="/../public/assets/ELEMENTS/graphic/header/gfx-mwstamp.png"
                    alt="gfx-mwstamp"
                    width="150"
                    height="60"
                  />
                  <Image
                    src="/../public/assets/ELEMENTS/graphic/header/gfx-rocketmanbomb.png"
                    alt="gfx-rocketmanbomb"
                    width="230"
                    height="60"
                  />
                </div>
                <div className="bg-sky-600 hover:bg-sky-700 px-1 rounded-xl">
                  <Account triedToEagerConnect={triedToEagerConnect} />
                </div>
              </div>
              <div className="text-center">Your ETH rewards: 3 ETH</div>
            </div>
          </div>
        </div>

        <nav className="flex justify-center self-center">
          <div className="flex flex-row sm:w-1/2 w-full order-1 bg-slate-500 gap-20">
            <Link href="/stake">
              <a>
                <NavImage name="stake" />
              </a>
            </Link>
            <Link href="/unstake">
              <a>
                <NavImage name="unstake" />
              </a>
            </Link>
            <Link href="/claim">
              <a>
                <NavImage name="claim" />
              </a>
            </Link>
          </div>
        </nav>
      </header>

      {children}
    </div>
  );
}
