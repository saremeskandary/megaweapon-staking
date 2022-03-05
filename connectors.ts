import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";

const ropsten = process.env.ROPSTEN_URL || "";
export const injected = new InjectedConnector({
  supportedChainIds: [3, 1337], //TODO check available newtorks that Dapp deployed on them
});

// const POLLING_INTERVAL = 8000;
// const RPC_URLS = {
//   1: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
//   3: ropsten,
//   4: "https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213",
// };

// // export const injected = new InjectedConnector({
// //   supportedChainIds: [1, 3, 4, 5, 42],
// // });

// export const network = new NetworkConnector({
//   urls: { 1: RPC_URLS[1], 3: RPC_URLS[3], 4: RPC_URLS[4] },
//   defaultChainId: 3,
// });
