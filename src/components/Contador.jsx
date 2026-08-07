import { useState } from "react";
import "./contador.css"

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div className="con">

            <h3>Quantidade = {contador}</h3>

            <div className="res">
                <button onClick={() => setContador(contador + 1)}>
                    Adicionar
                </button>

                <button
                    onClick={() => {
                        if (contador > 0) {
                            setContador(contador - 1);
                        } else {
                            setContador(0);
                        }
                    }}
                >
                    Diminuir
                </button>
            </div>
        </div>
    );
}

export default Contador;