import "./Cardapio.css";
import Burger from "./Img/Burger.jpg";
import Refrigerente from "./Img/Refrigerente.jpg";
import Salada from "./Img/Salada.jpg";
import { useState } from "react";

const Pburger = 15.90;
const Psalada = 17.90;
const Prefrigerente = 6.00;

function Cardapio({ burguer, salada, refrigerente }) {

    const [qtdBurger, setQtdBurger] = useState(0);
    const [totalBurger, setTotalBurger] = useState(0);

    const [qtdSalada, setQtdSalada] = useState(0);
    const [totalSalada, setTotalSalada] = useState(0);

    const [qtdRefri, setQtdRefri] = useState(0);
    const [totalRefri, setTotalRefri] = useState(0);

    // Total geral do pedido
    const totalGeral = totalBurger + totalSalada + totalRefri;

    return (
        <div>

            <div className="card">

                {/* BURGER */}
                <div className="b">
                    <div className="bur">
                        <img src={Burger} alt="Burger" />
                    </div>

                    <h2>{burguer}</h2>

                    <p>Preço: R$ {Pburger.toFixed(2)}</p>

                    <p>Quantidade: {qtdBurger}</p>

                    <p>Preço Total: R$ {totalBurger.toFixed(2)}</p>

                    <button
                        onClick={() => {
                            setQtdBurger(qtdBurger + 1);
                            setTotalBurger(totalBurger + Pburger);
                        }}
                    >
                        Adicionar
                    </button>

                    <button
                        onClick={() => {
                            if (qtdBurger > 0) {
                                setQtdBurger(qtdBurger - 1);
                                setTotalBurger(totalBurger - Pburger);
                            }
                        }}
                    >
                        Remover
                    </button>
                </div>

                {/* SALADA */}
                <div className="s">
                    <div className="salada">
                        <img src={Salada} alt="Salada" />
                    </div>

                    <h2>{salada}</h2>

                    <p>Preço: R$ {Psalada.toFixed(2)}</p>

                    <p>Quantidade: {qtdSalada}</p>

                    <p>Preço Total: R$ {totalSalada.toFixed(2)}</p>

                    <button
                        onClick={() => {
                            setQtdSalada(qtdSalada + 1);
                            setTotalSalada(totalSalada + Psalada);
                        }}
                    >
                        Adicionar
                    </button>

                    <button
                        onClick={() => {
                            if (qtdSalada > 0) {
                                setQtdSalada(qtdSalada - 1);
                                setTotalSalada(totalSalada - Psalada);
                            }
                        }}
                    >
                        Remover
                    </button>
                </div>

                {/* REFRIGERANTE */}
                <div className="r">
                    <div className="refri">
                        <img src={Refrigerente} alt="Refrigerente" />
                    </div>

                    <h2>{refrigerente}</h2>

                    <p>Preço: R$ {Prefrigerente.toFixed(2)}</p>

                    <p>Quantidade: {qtdRefri}</p>

                    <p>Preço Total: R$ {totalRefri.toFixed(2)}</p>

                    <button
                        onClick={() => {
                            setQtdRefri(qtdRefri + 1);
                            setTotalRefri(totalRefri + Prefrigerente);
                        }}
                    >
                        Adicionar
                    </button>

                    <button
                        onClick={() => {
                            if (qtdRefri > 0) {
                                setQtdRefri(qtdRefri - 1);
                                setTotalRefri(totalRefri - Prefrigerente);
                            }
                        }}
                    >
                        Remover
                    </button>
                </div>

            </div>

           <div>
                        <div className="total">
                <h2>Total do Pedido</h2>
                <h3>R$ {totalGeral.toFixed(2)}</h3>
            </div>

            <div className="apagar">
    <button
        onClick={() => {
            setQtdBurger(0);
            setTotalBurger(0);

            setQtdSalada(0);
            setTotalSalada(0);

            setQtdRefri(0);
            setTotalRefri(0);
        }}
    >
        Apagar Tudo
    </button>
</div>
           </div>


        </div>
    );
}

export default Cardapio;