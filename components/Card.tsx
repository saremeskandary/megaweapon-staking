interface ICard {
  children: any;
  dark?: boolean;
}
export function Card({ children, dark }:ICard) {
  return (
    <div
      className={`flex flex-row flex-wrap md:flex-nowrap gap-3 w-full justify-between border-2  hover:opacity-100 px-3 py-5 rounded-lg ${
        dark
          ? "bg-cardbg-dark text-gray-100  border-gray-100"
          : "bg-cardbg-light text-gray-900  border-gray-900"
      }`}
    >
      {children}
    </div>
  );
}
