import type { Testimonial } from "../types/type";
import { testimonials } from "../utils/constants";
import { TestimonialCard } from "./TestimonialCard";
import { motion } from "motion/react";

const wrap = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
    // ↑ Cards aparecen una por una (mejor ritmo visual).
  }
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" as const } }
};

export const Testimonials = () => {
  return (
    <motion.div
      className="flex flex-col gap-6 items-center pt-8 relative mt-44 w-[340px] md:w-[640px] mx-auto xl:flex-row xl:w-[920px]"
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.img
        className="size-6 absolute top-0 left-6"
        src="/images/bg-quotes.png"
        alt="quotes"
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 16 }}
        // ↑ Quotes entra con pop (scale spring). Se ve elegante y llama la atención.
      />

      {testimonials.map((testimonial: Testimonial) => (
        <motion.div
          key={testimonial.name}
          variants={item}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          // ↑ Hover lift para dar “tarjeta interactiva”.
        >
          <TestimonialCard {...testimonial} />
        </motion.div>
      ))}
    </motion.div>
  );
};
