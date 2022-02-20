import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import useEagerConnect from "../hooks/useEagerConnect";
import Account from "./Account";
import styles from "./layout.module.css";

export default function Layout({ children }: any) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
