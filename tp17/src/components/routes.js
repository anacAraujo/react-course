import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Contactos from "./contactos";
import Produtos from "./produtos";
import Sobre from "./sobre";
import Eventos from "./eventos";

export default function MyRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="contactos" element={<Contactos />} />
                    <Route path="produtos" element={<Produtos />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="eventos" element={<Eventos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
