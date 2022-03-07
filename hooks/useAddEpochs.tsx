import { BigNumberish } from "ethers";
import { useEffect, useState } from "react";
import { mwStakingAddress } from "../config";
import { useMW2StakingContract } from "./useContract";

export const useAddEpochs = () => {
  const mwStaking = useMW2StakingContract(mwStakingAddress);
  const [addEpoch, setAddEpoch] = useState<boolean>(false);
  const [firstAdd, setFirstAdd] = useState<BigNumberish>();
  const [numToAdd, setNumToAdd] = useState<BigNumberish>();
  useEffect(() => {
    const a = async () => {
      mwStaking &&
        firstAdd &&
        numToAdd&& (await mwStaking.addEpochs(firstAdd, numToAdd));
    };
    a();
    return setAddEpoch(false);
  }, [addEpoch]);
  return { setAddEpoch, setFirstAdd, setNumToAdd };
};
