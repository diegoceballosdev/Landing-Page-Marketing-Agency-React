import { Button } from './Button';
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <motion.section
      className="-mt-24 relative z-10 md:w-[520px] xl:w-[720px] mx-auto text-white md:-mt-44 xl:-mt-36"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // ↑ Hero entra desde abajo con fade.
      // Subir un poco el ancho (md/xl) ayuda a que el contenido respire y se vea “pro”.
    >
      <motion.h1
        className="text-center text-2xl md:text-4xl font-Raleway font-bold px-2 xl:text-5xl"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        // ↑ Título entra apenas después del contenedor.
      >
        Impulsamos tu negocio con marketing digital
      </motion.h1>

      <motion.p
        className="text-center text-sm mt-6 px-4 md:text-base text-white/80"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
        // ↑ Párrafo entra con delay para jerarquía visual (primero el título).
      >
        Creamos estrategias y campañas enfocadas en resultados. Combinamos creatividad, datos y optimización constante para que tu inversión en marketing se convierta en crecimiento real.
      </motion.p>

      <div className="text-center mt-7 mb-10">
        <Button text="Solicitar diagnóstico gratis" styles="w-[300px] xl:text-lg" />
      </div>
    </motion.section>
  );
};
