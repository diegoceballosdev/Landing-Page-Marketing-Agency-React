interface Props {
    text: string;
    styles?: string;
}

export const Button = ({text, styles}: Props) => {
    return (
        <button className={`bg-linear-to-b from-Teal-200 to-Cyan-500 h-12 rounded-3xl hover:to-Teal-200 cursor-pointer ${styles}`}>
            {text}
        </button>
    );
}