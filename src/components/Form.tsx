import { useState } from "react";
import { Button } from "./Button";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    } else if (name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }

    if (!email.trim()) {
      newErrors.email = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "El correo no es válido";
    }

    if (!message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    } else if (message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);

    if (!validate()) return;

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      toast.success("Mensaje enviado correctamente");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      id="contacto"
      className="absolute top-[-170px] xl:top-[-240px] left-0 right-0 mx-auto mb-[300px] text-center px-6 md:px-16 py-10 bg-Navy-850 rounded-2xl w-[90%] max-w-5xl shadow-xl shadow-black/30"
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
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
        Dejanos tu mensaje y te escribiremos para un diagnóstico inicial con
        oportunidades de mejora y una propuesta de acción.
      </motion.p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <motion.input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white rounded-3xl text-center h-12 w-full py-2 placeholder:text-gray-400 text-gray-700 xl:flex-1 outline-none"
              type="text"
              placeholder="Nombre"
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <motion.input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-3xl text-center h-12 w-full py-2 placeholder:text-gray-400 text-gray-700 xl:flex-1 outline-none"
              type="email"
              placeholder="Correo electrónico"
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <motion.textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white rounded-3xl text-center h-32 placeholder:text-gray-400 text-gray-700 xl:flex-1 outline-none p-4 resize-none"
            placeholder="Escribe tu mensaje aquí..."
            rows={2}
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
          />
          {errors.message && (
            <span className="text-red-500 text-xs">{errors.message}</span>
          )}
        </div>

        {loading ? (
          <Button text="Enviando..." styles="w-full" />
        ) : (
          <Button text="Enviar Mensaje" styles="w-full" />
        )}
      </form>
    </motion.div>
  );
};
