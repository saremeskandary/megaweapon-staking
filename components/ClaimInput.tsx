export function ClaimInput({ id, ETH, weekNum, handleClick, isChecked }) {
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
