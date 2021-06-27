import Image from "next/image";

import pause from "../public/pause.svg";
import play from "../public/play.svg";

export const Header = () => {
  return (
    <div
      id="Container"
      className="flex justify-between items-center px-1.5 pt-0 w-full h-6"
    >
      <Image src={play} className="ml-2 max-h-3" />
      <Image src={pause} className="ml-2 max-h-3" />
    </div>
  );
};
