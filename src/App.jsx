import { Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import Carrinho from "./paginas/Carrinho";
import Pedido from "./paginas/Pedido";
import Login from "./paginas/Login";

function App() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Login title="Login" />}
            />

            <Route
                path="/Login"
                element={<Login title="Login" />}
            />

            <Route
                path="/Home"
                element={<Home />}
            />

            <Route
                path="/Carrinho"
                element={<Carrinho />}
            />

            <Route
                path="/Pedido"
                element={<Pedido />}
            />

        </Routes>
    );
}

export default App;