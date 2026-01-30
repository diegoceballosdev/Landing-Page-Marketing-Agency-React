import { Button } from './Button';
import { motion } from "motion/react";

export const Form = () => {
  return (
    <motion.div
      id="contacto"
      className="absolute top-[-170px] xl:top-[-240px] left-0 right-0 mx-auto mb-[300px] text-center px-6 md:px-16 py-10 bg-Navy-850 rounded-2xl w-[90%] max-w-5xl shadow-xl shadow-black/30"
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
    // ↑ Pop con spring: ideal para “card floating” (como tu formulario que flota).
    // Aumenté un poco el padding y el radius para que se sienta más premium.
    >
      <motion.h2
        className="font-bold mb-4 text-[1.25rem] md:text-3xl text-white"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        Contactanos y empeza la transformación de tu negocio
      </motion.h2>

      <motion.p
        className="text-sm mb-8 md:text-base xl:px-12 text-white/75"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
      >
        Dejanos tu mensaje y te escribiremos para un diagnóstico inicial con oportunidades de mejora y una propuesta de acción.
      </motion.p>

      <form action="" className="flex flex-col gap-4">
        <div className='flex flex-col md:flex-row gap-6'>
          <motion.input
            className="bg-white rounded-3xl text-center h-12 w-full placeholder:text-gray-400 text-gray-700 xl:flex-1 outline-none"
            type="text"
            placeholder="Nombre"
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
          // ↑ whileFocus: el input “respira” al enfocarse (micro feedback).
          />
          <motion.input
            className="bg-white rounded-3xl text-center h-12 w-full placeholder:text-gray-400 text-gray-700 xl:flex-1 outline-none"
            type="email"
            placeholder="Correo electrónico"
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
          // ↑ whileFocus: el input “respira” al enfocarse (micro feedback).
          />
        </div>
        <motion.textarea
          className="bg-white rounded-3xl text-center h-32 placeholder:text-gray-400 text-gray-700 xl:flex-1 outline-none p-4 resize-none"
          placeholder="Escribe tu mensaje aquí..."
          rows={4}
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        // ↑ whileFocus: el input “respira” al enfocarse (micro feedback).
        />

        <Button text="Enviar Mensaje" styles="w-full" />
      </form>
    </motion.div>
  );
};
