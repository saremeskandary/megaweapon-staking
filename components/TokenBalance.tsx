import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useTokenBalance from "../hooks/useTokenBalance";
import { parseBalance } from "../util";

type TokenBalanceProps = {
  contractAddress: string;
  symbol: string;
};

const TokenBalance = ({ contractAddress, symbol }: TokenBalanceProps) => {
  const { account } = useWeb3React<Web3Provider>();
  const { data } = useTokenBalance(account, contractAddress);

  return (
    <p>
      {parseBalance(data ?? 0, 8, 2)} {`${symbol}`}
    </p>
  );
};

export default TokenBalance;
