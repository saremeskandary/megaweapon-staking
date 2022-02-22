import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <div className="bg-main w-screen h-screen bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="flex flex-col items-center justify-center">
        <Header />
        <div className="flex flex-col sm:w-1/2 w-full mt-14 gap-2 items-center justify-center ">
          {children}
        </div>
      </div>
    </div>
  );
}
