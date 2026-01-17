interface Props {
    name: string;
    role: string;
    image: string;
    quote: string;
}

export const TestimonialCard = ({ name, role, image, quote }: Props) => {
    return (
        <div className="bg-Navy-850 rounded-sm p-6">
            <blockquote className="text-[.75rem] mb-4 md:text-base">{quote}</blockquote>
            <div className="flex gap-2 items-center">
                <img className="size-6 rounded-full" src={image} alt={name} />
                <div>
                    <h3 className="text-[.75rem] font-bold md:text-sm">{name}</h3>
                    <p className="text-[.625rem] md:text-xs">{role}</p>
                </div>
            </div>
        </div>
    );
}   