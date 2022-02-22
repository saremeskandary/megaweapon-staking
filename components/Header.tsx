import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import useEagerConnect from "../hooks/useEagerConnect";
import Account from "./Account";
import Image from "next/image";

function NavImage(props: { name: string; alt: string }) {
  return (
    <div>
      <Image
        src={`/../public/assets/ELEMENTS/graphic/header/${props.name}.png`}
        alt={props.alt}
        width="120"
        height="30"
      />
    </div>
  );
}
function NavButton({ children }: any) {
  return (
    <div className="w-20 text-center border-x-2 border-b-4 px-4 rounded-bl-xl rounded-br-3xl bg-night border-gray-light text-gray-light -ml-1">
      {children}
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
        <div className="flex justify-center bg-header w-screen border-b-2">
          <div className="flex justify-center self-center w-1/2">
            <div className="w-full">
              <div className="flex flex-row w-full justify-between items-center ">
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
                <Account triedToEagerConnect={triedToEagerConnect} />
              </div>
              <div className="text-center">Your ETH rewards: 3 ETH</div>
            </div>
          </div>
        </div>

        <nav className="flex justify-center self-center ">
          <div className="flex flex-row w-1/2">
            <Link href="/stake">
              <a>
                <NavButton>stake</NavButton>
              </a>
            </Link>
            <Link href="/unstake">
              <a>
                <NavButton>unstake</NavButton>
              </a>
            </Link>
            <Link href="/claim">
              <a>
                <NavButton>claim</NavButton>
              </a>
            </Link>
          </div>
        </nav>
      </header>

      {children}
    </div>
  );
}
