import { Outlet, Link } from "react-router-dom";
import "../styles/styles.css";

const Layout = () => {
    return (
            <div>
                <div className="flex-container">
                    <div className="borderDivs flex-child">
                        <Link to="./contactos">Contactos</Link>
                    </div>
                    <div className="borderDivs flex-child">
                        <Link to="./eventos">Eventos</Link>
                    </div>
                    <div className="borderDivs flex-child">
                        <Link to="./produtos">Produtos</Link>
                    </div>
                    <div className="borderDivs flex-child">
                        <Link to="./sobre">Sobre</Link>
                    </div>
                    < Outlet />
                </div>
            </div>
            
    )
}


export default Layout;