import type { Feature } from "../types/type";
import { features } from "../utils/constants";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
    // ↑ Cuando la grilla entra en pantalla, los items aparecen en cadena.
  }
};

const card = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" as const } }
};

export const Features = () => {
  return (
    <motion.div
      id="servicios"
      className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-[160px] max-w-[920px] mx-auto text-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      // ↑ whileInView: se anima cuando entra al viewport (scroll reveal).
      // once:true evita que se repita si el usuario sube/baja.
    >
      {features.map(({ title, description, iconUrl }: Feature) => (
        <motion.div
          key={title}
          className="mt-8 flex flex-col items-center text-center"
          variants={card}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          // ↑ Hover lift: cada card se levanta un poco para interacción/vida.
        >
          <motion.img
            className="mb-4"
            src={iconUrl}
            alt={title}
            initial={{ rotate: -6, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            // ↑ Icon entra corrigiendo una rotación leve: se siente más dinámico.
          />
          <div>
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-white/75">{description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
