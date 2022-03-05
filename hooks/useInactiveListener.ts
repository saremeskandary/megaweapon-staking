import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../connectors";



export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React();

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum && !active && !error && !suppress) {
      const handleNetworkChanged = (networkId) => {
        console.log("networkChanged", networkId);
        activate(injected);
      };
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts.length > 0) {
          activate(injected);
        }
      };

      ethereum.on("networkChanged", handleNetworkChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        ethereum.removeListener("networkChanged", handleNetworkChanged);
        ethereum.removeListener("accountsChanged", handleAccountsChanged);
      };
    }

    return () => {};
  }, [active, error, suppress, activate]);
}
