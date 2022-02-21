import Layout from "../components/Layout";
import Image from "next/image";

function CardBackground({ children }) {
  return (
    <div className="flex flex-row w-full justify-between border-2 border-night hover:opacity-100 px-3 py-5 rounded-md">
      {children}
    </div>
  );
}

// interface ICardInput {
//   name: string;
//   input: React.ReactNode;
// }
// function CardInput({ children }: ICardInput) {
//   return (
//     <CardBackground>
//       <div className="flex">
//         <div>{children}</div>
//         <div className="border-2 border-night"></div>
//       </div>
//     </CardBackground>
//   );
// }

export default function stake() {
  return (
    <Layout>
      <CardBackground>
        <input type="number" placeholder="stake amount" />
        <div className="flex flex-row items-center gap-1 border-night border-2 px-4">
          <div className="">Stake</div>
          <Image
            src="/../public/assets/icon-addstake-default.png"
            alt="lock"
            width="20"
            height="25"
          />
        </div>
      </CardBackground>

      <CardBackground>
        <input type="number" placeholder="stake amount" />
        <div className="flex flex-row items-center gap-1 border-night border-2 px-4">
          <div className="">Set staking period</div>
          <Image
            src="/../public/assets/icon-addstake-default.png"
            alt="lock"
            width="20"
            height="25"
          />
        </div>
      </CardBackground>
      <CardBackground>
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between w-full p-2">
            <div>Your balance</div>
            <div>3 $WEPON</div>
          </div>
          <div className="flex flex-row justify-between w-full p-2">
            <div>Total duration</div>
            <div>3 day, 2 hours, 5 minutes</div>
          </div>
        </div>
      </CardBackground>
    </Layout>
  );
}
