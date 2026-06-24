import { useState } from "react"
import "./Contador.css"

function Contador() {
    const [contador, setContador] = useState(0)

    return (
        <>

            <h1>Contador = [{contador}]</h1>
            <div className="res">
                <button onClick={() => setContador(contador + 1)}>Adicionar</button>
                <button onClick={() => setContador(contador - 1)}>Diminuir</button>

            </div>
        </>
    )

}
export default Contador