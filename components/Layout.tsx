import Header from "./Header";
import Image from "next/image";

export default function Layout({ children }: any) {
  return (
    <div className="bg-main w-screen h-screen bg-no-repeat bg-cover bg-center bg-fixed overflow-x-hidden font-consola text-2xl">
      <link rel="preload" href="/fonts/consola.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/fonts/consolab.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/fonts/consolai.ttf" as="font" crossOrigin="" />
      <link rel="preload" href="/fonts/consolaz.ttf" as="font" crossOrigin="" />

      <div className="flex flex-col items-center justify-center">
        <Header />
        <div className="flex flex-col sm:w-144 w-full mt-14 gap-2 items-center justify-center px-2 pb-4">
          {children}
        </div>
      </div>

      <div className="flex flex-row-reverse m-2">
        <Image
          src={`/assets/ELEMENTS/graphic/gfx-cautionlabel.png`}
          alt="lock"
          width="70"
          height="100"
          className="h-full"
        />
      </div>
    </div>
  );
}
