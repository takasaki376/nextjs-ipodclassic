import { AnimatePresence, motion } from "framer-motion";

import { Header } from "../Header";

export const CoverFlowWindowManager = () => {
  return (
    <AnimatePresence>
      <motion.div
        id="Container"
        className="flex absolute z-0 flex-col w-full h-full"
      >
        <Header />
      </motion.div>
    </AnimatePresence>
  );
};
