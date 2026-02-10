import { motion } from "motion/react";

interface Props {
  text: string;
  styles?: string;
}

export const Button = ({ text, styles }: Props) => {
  return (
    <motion.button
      className={`relative overflow-hidden bg-linear-to-b from-Teal-200 to-Cyan-500 h-12 rounded-3xl cursor-pointer ${styles}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
    >
      <motion.span
        className="absolute inset-0 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/25"
          animate={{ x: ["-120%", "220%"] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        />
      </motion.span>

      <span className="relative z-10 font-semibold text-Navy-950">{text}</span>
    </motion.button>
  );
};
