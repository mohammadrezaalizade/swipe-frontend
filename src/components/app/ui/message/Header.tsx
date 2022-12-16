import React, { useState } from "react";
import Contact from "./Contact";
import {
  ChevronLeftIcon,
  EllipsisVerticalIcon,
  PhoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [dialog, setDialog] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed lg:sticky lg:w-full lg:h-16 top-0 left-0 right-0 z-[99999] flex justify-between items-center px-5 py-4 shadow-md bg-gray-50">
        <Contact />
        <div className="flex gap-4 items-center">
          <div className=" hidden md:flex md:items-center md:gap-4">
            <PhoneIcon className="w-7 h-auto text-gray-400 scale-100 hover:scale-110 hover:text-blue-500 transition-all duration-200 cursor-pointer " />
            <VideoCameraIcon className="w-7 h-auto text-gray-400 scale-100 hover:scale-110 hover:text-blue-500 transition-all duration-200 cursor-pointer " />
          </div>
          <ChevronLeftIcon
            onClick={() => navigate("/")}
            className="w-9 h-9 lg:hidden bg-gray-200 p-1.5 text-gray-400 rounded-full hover:text-blue-500 transition duration-150 cursor-pointer"
          />
          <EllipsisVerticalIcon
            onClick={() => setDialog(!dialog)}
            className="w-10 h-10  p-1.5 text-gray-400 rounded-full hover:text-blue-500 transition duration-150 cursor-pointer md:hidden"
          />
        </div>
      </div>
      <AnimatePresence>
        {dialog && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.3,
              },
            }}
            className="absolute right-4 top-16 bg-white p-3 w-[150px] max-h-fit rounded-md flex flex-col gap-3"
          >
            <div className="group text-gray-400 hover:text-blue-500 flex items-center justify-between cursor-pointer">
              <PhoneIcon className="w-7 h-auto transition-all duration-200 " />
              <p className="font-semibold ">Voice call</p>
            </div>
            <div className="group text-gray-400 hover:text-blue-500 flex items-center justify-between cursor-pointer">
              <VideoCameraIcon className="w-7 h-auto transition-all duration-200 " />
              <p className="font-semibold ">Voice call</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
