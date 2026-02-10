import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const MoreInformation = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <motion.div
      ref={ref}
      id="nosotros"
      className="my-44 space-y-3 md:flex md:items-center md:gap-12 max-w-7xl mx-auto text-white"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <motion.img
        className="md:w-[420px]"
        style={{ y }}
        src="/images/illustration-stay-productive.png"
        alt="illustration stay productive"
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      />

      <div>
        <motion.h2
          className="font-bold mb-4 md:text-3xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          Somos tu equipo de marketing, sin vueltas
        </motion.h2>

        <motion.p
          className="text-sm mb-4 md:text-base text-white/75"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
        >
          Somos una agencia enfocada en resultados. Nos apasiona construir
          marcas con presencia sólida y campañas que generen ventas.
        </motion.p>

        <motion.p
          className="text-sm mb-4 md:text-base text-white/75"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
        >
          Trabajamos con procesos simples, comunicación directa y una mentalidad
          de mejora constante. Si buscás un equipo que se comprometa de verdad
          con el crecimiento de tu negocio, estás en el lugar correcto.
        </motion.p>

        <motion.a
          href="#"
          className="text-Teal-200 flex items-center gap-2 hover:underline w-fit"
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <p>Más sobre nosotros</p>
          <motion.img
            src="/images/icon-arrow.svg"
            alt="icon arrow"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
        </motion.a>
      </div>
    </motion.div>
  );
};
