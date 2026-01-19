export const Navbar = () => {

    return (
        <nav>
            <ul className="flex gap-6 text-white xl:gap-10 font-medium lg:text-xl">
                <li>
                    <a className="hover:text-teal-200" href="#servicios">Servicios</a>
                </li>
                <li>
                    <a className="hover:text-teal-200" href="#nosotros">Nosotros</a>
                </li>
                <li>
                    <a className="hover:text-teal-200" href="#contacto">Contacto</a>
                </li>
            </ul>
        </nav>
    );
}