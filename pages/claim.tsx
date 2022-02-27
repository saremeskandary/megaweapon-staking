import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Layout from "../components/Layout";

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

const data = [
  { id: "1", week: "41", ETH: "3" },
  { id: "2", week: "42", ETH: "3" },
  { id: "3", week: "45", ETH: "3" },
  { id: "4", week: "48", ETH: "3" },
  { id: "5", week: "52", ETH: "3" },
];
export default function claim({}: Props) {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

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

  console.log(isCheck);
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
        content="Claim all eligible"
        lock="icon-claim"
        onClick={handleSelectAll}
      />
      <form action="" className="flex flex-col md:w-96 px-6 gap-2">
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
        <Button full kind="dark" content="[ CONFIRM ]" onClick={() => {}} />
      </form>
    </Layout>
  );
}
