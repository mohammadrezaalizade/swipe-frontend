import { Variants } from "framer-motion";

const fadeInOut: Variants = {
  hide: {
    opacity: 0,
    display: "none",
  },
  animate: {
    opacity: 1,
    display: "flex",
    transition: {
      delay: 0.6,
    },
  },
  exit: {
    opacity: 0,
    display: "none",
    transition: {},
  },
};

export default fadeInOut;
