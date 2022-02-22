import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <div className="bg-main w-screen h-screen bg-no-repeat bg-cover bg-center bg-fixed overflow-x-hidden">
      <div className="flex flex-col items-center justify-center">
        <Header />
        <div className="flex flex-col sm:w-128 w-full mt-14 gap-2 items-center justify-center px-2 ">
          {children}
        </div>
      </div>
    </div>
  );
}
