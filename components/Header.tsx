import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import useEagerConnect from "../hooks/useEagerConnect";
import Account from "./Account";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface INavImage {
  name: string;
  selected?: boolean;
}

function NavImage({ name, selected }: INavImage) {
  const [hovered, setHovered] = useState<boolean>(false);
  const dark = "default";
  const light = "selected";
  const [theme, setTheme] = useState<"default" | "selected">();
  const height = "40";
  const width = "150";

  useEffect(() => {
    switch (true) {
      case selected || hovered:
        setTheme(light);
        break;

      default:
        setTheme(dark);
        break;
    }
  }, [hovered, selected]);

  return (
    <div
      className={`flex relative item-center text-center -mx-2 md:-mx-1 lg:mx-0  text-night ${
        selected && "gray-100"
      }`}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="">
        <Image
          src={`/assets/btn-header-mode-${theme}.png`}
          alt={name}
          width={width}
          height={height}
        />
      </div>
      <div
        className={`absolute px-6  ${
          theme === dark ? "text-night" : "text-gray-200"
        }`}
      >
        {name}
      </div>
    </div>
  );
}

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
          <div className="flex justify-center self-center sm:w-128 w-full">
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
              <div className="text-center font-consolab text-xl">
                Your ETH rewards: 3 ETH
              </div>
            </div>
          </div>
        </div>

        <nav className="flex justify-center self-center px-4">
          <div className="flex flex-row sm:w-128 w-full">
            <Link href="/stake">
              <a>
                <NavImage
                  name="STAKE"
                  selected={active === "/stake" ? true : false}
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
            <Link href="/claim">
              <a>
                <NavImage
                  name="CLAIM"
                  selected={active === "/claim" ? true : false}
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
