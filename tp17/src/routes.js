import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/ex1/layout";
import Contactos from "./components/ex1/contactos";
import Produtos from "./components/ex1/produtos";
import Sobre from "./components/ex1/sobre";
import Eventos from "./components/ex1/eventos";

export default function MyRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/contactos" element={<Contactos />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/eventos" element={<Eventos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
