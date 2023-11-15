import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="./contactos">Contactos</Link>
                    </li>
                    <li>
                        <Link to="./eventos">Eventos</Link>
                    </li>
                    <li>
                        <Link to="./produtos">Produtos</Link>
                    </li>
                    <li>
                        <Link to="./sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
< Outlet />

export default Layout;