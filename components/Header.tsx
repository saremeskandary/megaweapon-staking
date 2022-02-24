import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import useEagerConnect from "../hooks/useEagerConnect";
import Account from "./Account";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NavImage } from "./NavImage";

export default function Header({ children }: any) {
  const router = useRouter();
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;
  const [active, setActive] = useState<"/stake" | "/unstake" | "/claim">();
  useEffect(() => {
    switch (router.pathname) {
      case "/stake":
        setActive("/stake");
        break;
      case "/unstake":
        setActive("/unstake");
        break;
      case "/claim":
        setActive("/claim");
        break;
      default:
        console.log("No such path exists!");
        break;
    }
  }, [account, router, active]);
  return (
    <div>
      <header>
        <div className="flex justify-center bg-header w-screen border-b-2 border-black shadow-black shadow-md">
          <div className="flex justify-center self-center sm:w-144 w-full">
            <div className="w-full item-center">
              <div className="flex flex-row  flex-wrap w-full items-center justify-center md:justify-between">
                <div className="flex flex-row justify-between gap-1 p-1">
                  <Image
                    src="/assets/ELEMENTS/graphic/header/gfx-mwstamp.png"
                    alt="gfx-mwstamp"
                    width="150"
                    height="60"
                  />
                  <Image
                    src="/assets/ELEMENTS/graphic/header/gfx-rocketmanbomb.png"
                    alt="gfx-rocketmanbomb"
                    width="230"
                    height="60"
                  />
                </div>
                <div className="bg-blue-500 hover:bg-sky-700 text-white px-1 py-1 rounded-3xl">
                  <Account triedToEagerConnect={triedToEagerConnect} />
                </div>
              </div>
              <div className="text-center font-consolab text-3xl">
                Your ETH rewards: 3 ETH
              </div>
            </div>
          </div>
        </div>

        <nav className="flex justify-center self-center">
          <div className="flex flex-row-reverse pr-0 md:pr-40 lg:pr-44 ">
            <Link href="/claim">
              <a>
                <NavImage
                  name="CLAIM"
                  selected={active === "/claim" ? true : false}
                />
              </a>
            </Link>
            <Link href="/unstake">
              <a>
                <NavImage
                  name="UNSTAKE"
                  selected={active === "/unstake" ? true : false}
                />
              </a>
            </Link>
            <Link href="/stake">
              <a>
                <NavImage
                  name="STAKE"
                  selected={active === "/stake" ? true : false}
                />
              </a>
            </Link>
          </div>
        </nav>
      </header>

      {children}
    </div>
  );
}
