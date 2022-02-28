import Layout from "../components/Layout";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import MWStaking_ABI from "../artifacts/contracts/mw2_staking.sol/MWStaking.json";
import type { MWStaking } from "../typechain/MWStaking";


function Caution({ onCancel }) {
    const [nfts, setNfts] = useState([]);
    const [loadingState, setLoadingState] = useState("not-loaded");
    useEffect(() => {
      loadNFTs();
    }, []);
    async function loadNFTs() {
      /* create a generic provider and query for unsold market items */
      const provider = new ethers.providers.JsonRpcProvider();
      const tokenContract = new ethers.Contract(
        nftaddress,
        MWStaking_ABI,
        provider
      );
      const marketContract = new ethers.Contract(
        nftmarketaddress,
        Market.abi,
        provider
      );
      const data = await marketContract.fetchMarketItems();

      /*
       *  map over items returned from smart contract and format
       *  them as well as fetch their token metadata
       */
      const items = await Promise.all(
        data.map(async (i) => {
          const tokenUri = await tokenContract.tokenURI(i.tokenId);
          const meta = await axios.get(tokenUri);
          let price = ethers.utils.formatUnits(i.price.toString(), "ether");
          let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
          };
          return item;
        })
      );
      setNfts(items);
      setLoadingState("loaded");
    }
    async function buyNft(nft) {
      /* needs the user to sign the transaction, so will use Web3Provider and sign it */
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        nftmarketaddress,
        Market.abi,
        signer
      );

      /* user will be prompted to pay the asking proces to complete the transaction */
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      const transaction = await contract.createMarketSale(
        nftaddress,
        nft.tokenId,
        {
          value: price,
        }
      );
      await transaction.wait();
      loadNFTs();
    }
    if (loadingState === "loaded" && !nfts.length)
      return <h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>;
  return (
    <div className="flex flex-col p-2 gap-2 w-80 border-2 rounded-md border-red-800 bg-alarm">
      <h2 className="text-xl self-center font-consolab px-2 rounded-md bg-cardbg-light text-red-600 ">
        Caution!
      </h2>
      <p className="text-lg font-consolaz rounded-md bg-cardbg-light p-2">
        You're about to lose money. Claim your ETH rewards before you unstake.
      </p>
      <div className="flex flex-row self-end gap-2 ">
        <button
          onClick={onCancel}
          className="border-b-4 text-base border-transparent hover:border-red-600 "
        >
          Close
        </button>
        <Link href="/claim">
          <a className="border-b-4 text-lg border-transparent hover:border-green-800">
            Claim
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function stake() {
  const [caution, setCaution] = useState<boolean>(false);
  return (
    <Layout>
      {caution  && (
        <Caution
          onCancel={() => {
            setCaution(false);
          }}
        />
      )}
      <Card>
        <div className="flex-1">
          <input
            type="number"
            id="stake"
            className=" text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
            placeholder="stake amount"
            required
          />
        </div>

        <Button
          full
          kind="light"
          content="Stake"
          lock="icon-stake"
          onClick={() => {setCaution(true)}}
        />
      </Card>

      <Card>
        <div className="flex-1 h-full">
          <input
            type="date"
            id="stake"
            className="text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
            required
          />
        </div>
        <Button
          full
          kind="light"
          content="Set staking period"
          lock="icon-stake"
          onClick={() => {}}
        />
      </Card>

      <Card>
        <div className="flex flex-col w-full justify-center items-center md:items-stretch">
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-stretch p-2">
            <div className="text-lg">Your balance</div>
            <div>3 $WEPON</div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-stretch p-2">
            <div className="text-lg">Total duration</div>
            <div>3 day, 2 hours, 5 minutes</div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
