import { Navbar } from './Navbar';

export const Header = () => {
    return (
        <header className="relative z-20 flex justify-between max-w-8xl mx-auto p-4 items-center">
            
            <a href="/">
                <img className="w-20 xl:w-32" src="/images/logo.svg" alt="Logo" />
            </a>

            <Navbar />
        </header>
    );
}