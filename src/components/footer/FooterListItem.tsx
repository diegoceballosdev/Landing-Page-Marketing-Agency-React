interface Props {
    text: string;
}

export const FooterListItem = ( {text}: Props) => {
    return (
        <li>
            <a href="" className="hover:text-Teal-200">
                {text}
            </a>
        </li>
    );
}