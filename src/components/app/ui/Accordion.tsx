import React, { PropsWithChildren, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Props extends PropsWithChildren {
  title: string;
  alert: string;
}

const variants: Variants = {
  hidden: {
    height: 0,
  },
  visible: {
    height: "100%",
    transition: {
      type: "tween",
    },
  },
  exit: {
    height: "0%",
    transition: {
      type: "just",
    },
  },
};

const Accordion: React.FC<Props> = ({ alert, title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      {/* HEADING */}
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="flex justify-between group group-hover:text-blue-500 transition-all duration-200 cursor-pointer"
      >
        <div className="flex flex-col group">
          <h1
            className={`font-semibold group-hover:text-blue-500 ${
              isVisible ? "text-blue-500" : "text-gray-600"
            }  transition-all duration-200`}
          >
            {alert}
          </h1>
          <p className="text-gray-400 text-xs font-normal">{title}</p>
        </div>
        <AnimatePresence mode="wait">
          {isVisible ? (
            <ChevronUpIcon
              className={`w-7 h-7 group-hover:text-blue-500  transition-all duration-200 ${
                isVisible ? "text-blue-500" : "text-gray-400"
              }`}
            />
          ) : (
            <ChevronDownIcon
              className={`w-7 h-7 group-hover:text-blue-500  transition-all duration-200 ${
                isVisible ? "text-blue-500" : "text-gray-400"
              }`}
            />
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-3 border-t border-dotted"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
