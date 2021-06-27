import { motion } from "framer-motion";
import Image from "next/image";

import dice from "../../../public/dice.svg";

export const GamesPreview = () => {
  return (
    <motion.div
      id="Container"
      className="flex flex-col items-center justify-center h-full"
    >
      <Image src={dice} className="m-2 w-24 h-24" />
      <h3 id="Text" className="m-0 text-base font-medium">
        Games
      </h3>
    </motion.div>
  );
};
