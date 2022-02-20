import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import useEagerConnect from "../hooks/useEagerConnect";
import Account from "./Account";;

export default function Header({ children }: any) {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;
  return (
    <div>
      <header>
        <nav>
          <Link href="/">
            <a>next-web3-boilerplate</a>
          </Link>
          <Link href="/stake">
            <a>next-web3-boilerplate</a>
          </Link>
          <Link href="/unstake">
            <a>next-web3-boilerplate</a>
          </Link>
          <Link href="/claim">
            <a>next-web3-boilerplate</a>
          </Link>
          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </header>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }
      `}</style>

      {children}
    </div>
  );
}
