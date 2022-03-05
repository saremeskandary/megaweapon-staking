import { BigNumber, BigNumberish } from "ethers";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Layout from "../components/Layout";
import { useClaim } from "../hooks/useClaim";
import { useGetEpoch } from "../hooks/useGetEpoch";
import { ClaimInput } from "../components/ClaimInput";
import { useMW2StakingContract, useWeaponContract } from "../hooks/useContract";
import { mwStakingAddress } from "../config";

//FIXME what is the function for claim data?
const data = [
  { id: "41", week: "41", ETH: "3" },
  { id: "42", week: "42", ETH: "3" },
  { id: "45", week: "45", ETH: "3" },
  { id: "48", week: "48", ETH: "3" },
  { id: "52", week: "52", ETH: "3" },
];
export default function claim() {
  const mwStaking = useMW2StakingContract(mwStakingAddress);
  const weapon = useWeaponContract(mwStakingAddress);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const [submited, setSubmited] = useState<boolean>(false);
  const [epochs, setEpochs] = useState<BigNumberish[]>();

  useEffect(() => {
    setEpochs(isCheck as BigNumberish[]);
    const claim = async () => {
      await useClaim(mwStaking, epochs);
    };
    isCheck && submited && epochs && claim();
    return setSubmited(false);
  }, [isCheck, submited, epochs]);

  useEffect(() => {
    setList(data);
  }, [list]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmited(true);
  };
  return (
    <Layout>
      <div className="flex self-start">
        <Button
          kind="dark"
          content="Claim all eligible"
          lock="icon-claim"
          onClick={handleSelectAll}
        />
      </div>

      <Button
        kind="dark"
        content="select all claimable weeks"
        lock="icon-claim"
        onClick={handleSelectAll}
      />
      <form
        action=""
        onSubmit={handleSumbit}
        className="flex flex-col md:w-96 px-6 gap-2"
      >
        <Card dark style={{ flexDirection: "column" }}>
          <label>ETH REWARD AVAILABLE:</label>
          {list.map((i) => (
            <ClaimInput
              key={i.id}
              id={i.id}
              ETH={i.ETH}
              weekNum={i.week}
              handleClick={handleClick}
              isChecked={isCheck.includes(i.id)}
            />
          ))}
        </Card>
        <div className="mb-2">
          <Button
            type="reset"
            kind="light"
            content="Show more weeks"
            onClick={() => {}}
          />
        </div>
        <Button full type="submit" kind="dark" content="[ CONFIRM ]" />
      </form>
    </Layout>
  );
}
