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
      className="absolute w-screen h-screen bg-red-500 z-[999]"
    >
      {children}
    </motion.div>
  );
};

export default DetailLayout;
