import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { BigNumberish } from "ethers";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Layout from "../components/Layout";
import { useClaim } from "../hooks/useClaim";
import useMW2StakingContract from "../hooks/useMW2StakingContract";

type Props = {};

function ClaimInput({ id, ETH, weekNum, handleClick, isChecked }) {
  return (
    <div className="flex flex-row items-center justify-between border-2 p-1 bg-cardbg-light text-cardbg-dark">
      <input
        id={id}
        name={"Week #" + weekNum}
        onChange={handleClick}
        checked={isChecked}
        type="checkbox"
      ></input>
      <div>Week #{weekNum}</div>
      <div>{ETH} ETH</div>
    </div>
  );
}

//FIXME what is the function for claim data?
const data = [
  { id: "41", week: "41", ETH: "3" },
  { id: "42", week: "42", ETH: "3" },
  { id: "45", week: "45", ETH: "3" },
  { id: "48", week: "48", ETH: "3" },
  { id: "52", week: "52", ETH: "3" },
];
export default function claim({}: Props) {
  const mwStaking = useMW2StakingContract();
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const [submited, setSubmited] = useState<boolean>(false);
  const [epochs, setEpochs] = useState<BigNumberish[]>();

  useEffect(() => {
    setEpochs(isCheck as BigNumberish[]);
    isCheck && submited && epochs && useClaim(mwStaking, epochs);
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
