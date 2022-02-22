interface ICard {
  children: any;
  kind: "dark"|"light";
}
export function Card<ICard>({ children, kind = "light" }) {
  return (
    <div
      className={`flex flex-row flex-wrap w-full justify-between border-2  hover:opacity-100 px-3 py-5 rounded-lg ${
        kind === "dark"
          ? "bg-cardbg-dark text-gray-100  border-gray-100"
          : "bg-cardbg-light text-gray-900  border-gray-900"
      }`}
    >
      {children}
    </div>
  );
}
