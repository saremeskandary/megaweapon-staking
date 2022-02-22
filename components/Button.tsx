import Image from "next/image";
import { useEffect, useState } from "react";

interface IButton {
  onClick: any;
  kind: "dark" | "light";
  lock?: "icon-addstake" |
  "icon-addstake-selected" |
  "icon-extendstake-default" |
  "icon-extendstake-selected" |
  "icon-extendstake-selected" |
  "icon-stake-defaut";
  content: string;
}

export function Button({ onClick, kind = "light", lock, content }: IButton) {
  const light = "bg-cardbg-light text-gray-900  border-gray-900";
  const dark = "bg-cardbg-dark text-gray-100  border-gray-100";
  const [selected, setSelected] = useState<boolean>(false);
  const [lockTheme, setLockTheme] = useState<"default" | "selected">();
  const [style, setStyle] = useState<string>();
  useEffect(() => {
    switch (kind && selected) {
      case "light" && false:
        setLockTheme("default");
        setStyle(light);
        break;
      case "dark" && true:
        setLockTheme("default");
        setStyle(dark);
        break;
      case "dark" && false:
        setLockTheme("selected");
        setStyle(dark);
        break;
      case "light" && true:
        setLockTheme("selected");
        setStyle(light);
        break;

      default:
        console.error("something is wrong");
        break;
    }
  }, [kind, selected]);

  return (
    <div
      onMouseOver={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      onClick={onClick}
      className={`flex flex-row flex-wrap w-44 justify-between border-2  hover:opacity-100 ${style}`}
    >
      <div className="px-2 py-1">{content}</div>
      {lock && (
        <div className="flex px-2 py-1 border-l-2 border-night">
          <Image
            src={`/../public/assets/${lock}-${lockTheme}.png`}
            alt="lock"
            width="25"
            height="25"
            className="self-center" />
        </div>
      )}
    </div>
  );
}
