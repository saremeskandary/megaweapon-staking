import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "./Account";
import ETHBalance from "./ETHBalance";
import Header from "./Header";
import Layout from "./Layout";
import TokenBalance from "./TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Layout>
          <main>
            <h1>
              Welcome to{" "}
              <a href="https://github.com/mirshko/next-web3-boilerplate">
                next-web3-boilerplate
              </a>
            </h1>

            {isConnected && (
              <section>
                <ETHBalance />

                <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />
              </section>
            )}
          </main>

          <style jsx>{`
            main {
              text-align: center;
            }
          `}</style>
      </Layout>
    </div>
  );
}

export default Home;
