import type { Feature } from "../types/type";
import { features } from "../utils/constants";

export const Features = () => {
    return (
        <div id="servicios" className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-[140px] max-w-[920px] mx-auto">
            {
                features.map(({ title, description, iconUrl }: Feature) => (
                    <div className="mt-8 flex flex-col items-center text-center" key={title}>
                        <img className="mb-4" src={iconUrl} alt={title} />
                        <div>
                            <h3 className="font-bold mb-2">{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}