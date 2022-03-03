import Link from "next/link";

export function Caution({ onCancel }) {
  return (
    <div className="flex flex-col p-2 gap-2 w-80 border-2 rounded-md border-red-800 bg-alarm">
      <div>

      </div>

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
