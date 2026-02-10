import { motion } from "motion/react";

const navContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export const Navbar = () => {
  return (
    <nav>
      <motion.ul
        className="flex gap-6 text-white xl:gap-10 font-medium lg:text-xl"
        variants={navContainer}
        initial="hidden"
        animate="show"
      >
        {[
          { href: "#servicios", label: "Servicios" },
          { href: "#nosotros", label: "Nosotros" },
          { href: "#contacto", label: "Contacto" },
        ].map((item) => (
          <motion.li key={item.href} variants={navItem} className="relative">
            <motion.a
              href={item.href}
              className="hover:text-teal-200"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {item.label}

              {/* underline animado */}
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] w-full bg-Teal-200"
                variants={{
                  rest: { scaleX: 0, opacity: 0, transformOrigin: "left" },
                  hover: { scaleX: 1, opacity: 1, transformOrigin: "left" },
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                // ↑ Subrayado: en hover se “dibuja” desde la izquierda (scaleX 0 -> 1).
              />
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};
