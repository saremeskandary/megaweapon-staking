import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1337], //TODO check available newtorks that Dapp deployed on them
});
