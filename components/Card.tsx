export function Card({ children }) {
  return (
    <div className="flex flex-row flex-wrap w-full bg-cardbg text-gray-100 justify-between border-2 border-gray-100 hover:opacity-100 px-3 py-5 rounded-lg">
      {children}
    </div>
  );
}
