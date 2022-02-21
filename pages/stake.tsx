import Layout from "../components/Layout";
import Image from "next/image";

function CardBackground({ children }) {
  return (
    <div className="flex flex-row w-full justify-between border-2 border-night hover:opacity-100 px-2 py-3">
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
        <div>
          <Image
            src={`/../public/assets/icon-addstake-default.png`}
            alt={"lock"}
            width="20"
            height="25"
          />
        </div>
        <div>Stake</div>
      </CardBackground>

      <CardBackground>
        <div>Set staking period</div>
      </CardBackground>
      <CardBackground>
        <div className="flex flex-row">
          <div className="m-2">
            <div>Your balance</div>
            <div>3 $WEPON</div>
          </div>
          <div>
            <div className="m-2">Total duration</div>
            <div>3 day, 2 hours, 5 minutes</div>
          </div>
        </div>
      </CardBackground>
    </Layout>
  );
}
