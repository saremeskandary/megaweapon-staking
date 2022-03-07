import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Layout from "../components/Layout";
import { useClaim } from "../hooks/useClaim";
import { ClaimInput } from "../components/ClaimInput";
import { useClaimData } from "../hooks/useClaimData";

//FIXME what is the function for claim data?
// epoch should be week = 7 days
// functions  =  getEpoch and addEpochs

export default function claim() {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const { setClick, setEpochs } = useClaim();
  const { data, setRefresh } = useClaimData();

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

  return (
    <Layout>
      <div className="flex self-start flex-col gap-1">
        <Button
          kind="dark"
          content="refresh"
          lock="icon-claim"
          onClick={() => setRefresh(true)}
        />
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
        onSubmit={(e) => {
          e.preventDefault()
          setEpochs(isCheck)
          setClick(true)}}
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
          />
        </div>
        <Button full type="submit" kind="dark" content="[ CONFIRM ]" />
      </form>
    </Layout>
  );
}
