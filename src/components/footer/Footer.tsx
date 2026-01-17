import { ContactItem } from "./ContactItem";
import { FooterListItem } from "./FooterListItem";
import { contactsInfo, pages, conditions, medias } from "../../utils/constants";
import type { ContactInfo, Media } from "../../types/type";

export const Footer = () => {
    return (
        <footer className="pt-[260px] xl:pt-[200px] pb-[100px] px-6 mx-auto max-w-8xl">

            <img className="mb-12 md:mx-auto" src="images/logo.svg" alt="Company Logo" />

            <div className="xl:flex xl:gap-24 xl:px-20">
                <div className="flex flex-col gap-4 md:flex-row  xl:gap-24 md:gap-16 md:px-20 xl:px-0">
                    <ContactItem styles="flex-1" {...contactsInfo[0]} />

                    <div className="flex flex-col gap-4 flex-1 xl:flex-none">
                        {contactsInfo.slice(1, 4).map((contact: ContactInfo, index) => (
                            <ContactItem
                                key={index}
                                {...contact}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-8 mt-16 xl:mt-0 md:flex-row md:justify-center xl:justify-start md:gap-32">
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

                    <div className="flex justify-center gap-4 ">
                        {
                            medias.map((media: Media) => (
                                <div key={media.text} className="hover:text-Teal-200 text-white cursor-pointer border rounded-full size-[30px] p-0.5">
                                    {media.icon}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
}