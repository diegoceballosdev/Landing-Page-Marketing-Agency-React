import { Navbar } from "./Navbar";
import { motion } from "motion/react";

export const Header = () => {
  return (
    <motion.header
      className="relative z-20 flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between max-w-8xl mx-auto p-4 items-center"
      initial={{ opacity: 0, y: -10, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <motion.a
        href="/"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
      >
        <img
          className="w-20 xl:w-32 justify-center"
          src="/images/logo.svg"
          alt="Logo"
        />
      </motion.a>

      <Navbar />
    </motion.header>
  );
};
