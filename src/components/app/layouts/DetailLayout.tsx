import React, { PropsWithChildren } from "react";

import { motion } from "framer-motion";

const DetailLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{
        x: "100vw",
      }}
      animate={{
        x: 0,
        transition: {
          duration: 0.7,
        },
      }}
      exit={{
        x: "100vw",
        transition: {
          duration: 0.7,
        },
      }}
      className="absolute w-screen h-screen bg-gray-50 z-[999] lg:hidden px-3 py-2"
    >
      {children}
    </motion.div>
  );
};

export default DetailLayout;
