import type { Testimonial } from "../types/type";
import { testimonials } from "../utils/constants";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
    return (
        <div className="flex flex-col gap-6 items-center pt-6 relative mt-40 w-[340px] md:w-[600px] mx-auto xl:flex-row xl:w-[920px]">

            <img className="size-6 absolute top-0 left-6" src="/images/bg-quotes.png" alt="quotes" />

            {
                testimonials.map((testimonial: Testimonial) => (
                    <TestimonialCard
                        key={testimonial.name}
                        {...testimonial}
                    />
                ))
            }
        </div>
    );
}