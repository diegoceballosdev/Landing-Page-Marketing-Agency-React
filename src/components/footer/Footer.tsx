import { ContactItem } from "./ContactItem";
import { FooterListItem } from "./FooterListItem";
import { contactsInfo, pages, conditions, medias } from "../../utils/constants";
import type { ContactInfo, Media } from "../../types/type";
import { motion } from "motion/react";

const group = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const} },
};

export const Footer = () => {
  return (
    <motion.footer
      className="pt-[500px] md:pt-[420px] xl:pt-[340px] pb-[100px] px-6 mx-auto max-w-8xl"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.img
        className="mb-12 md:mx-auto"
        src="images/logo.svg"
        alt="Company Logo"
        variants={group}
        // ↑ Logo aparece con fade+up.
      />

      <div className="xl:flex xl:gap-24 xl:px-20">
        <motion.div
          className="flex flex-col gap-4 md:flex-row xl:gap-24 md:gap-16 md:px-20 xl:px-0"
          variants={group}
          // ↑ Primer bloque de info aparece como grupo.
        >
          <ContactItem styles="flex-1" {...contactsInfo[0]} />

          <div className="flex flex-col gap-4 flex-1 xl:flex-none">
            {contactsInfo.slice(1, 4).map((contact: ContactInfo, index) => (
              <ContactItem key={index} {...contact} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 mt-16 xl:mt-0 md:flex-row md:justify-center xl:justify-start md:gap-32"
          variants={group}
          // ↑ Segundo bloque (links + redes) entra después, manteniendo ritmo.
        >
          <ul>
            {pages.map((page: string) => (
              <FooterListItem key={page} text={page} />
            ))}
          </ul>

          <ul>
            {conditions.map((condition: string) => (
              <FooterListItem key={condition} text={condition} />
            ))}
          </ul>

          <div className="flex justify-center gap-4">
            {medias.map((media: Media) => (
              <motion.div
                key={media.text}
                className="text-white cursor-pointer border border-white/25 rounded-full size-[34px] p-1 flex items-center justify-center"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 420, damping: 22 }}
                // ↑ Social icons: hover levanta + agranda; tap comprime.
                // Se siente “cliqueable” y más premium.
              >
                <span className="hover:text-Teal-200">{media.icon}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
