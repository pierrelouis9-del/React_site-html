import "./Cardapio.css";
import { useState } from "react";

function Cardapio({ id, nome, preco, foto, categoria, adicionarCarrinho }) {
    const [qtdComida, setQtdComida] = useState(0);
    const total = qtdComida * preco;

    return (
        <div>
            <div className="card">
                <div className="cardapio">
                    <img src={foto} alt={nome} />
                    <h2>{nome}</h2>
                    <p>{categoria}</p>
                    <p>Preço: R$ {preco.toFixed(2)}</p>
                    <p>Quantidade: {qtdComida}</p>
                    <p>Total: R$ {total.toFixed(2)}</p>

                    <button className="count" onClick={() => setQtdComida(qtdComida + 1)}>
                        +
                    </button>

                    <button 
                        className="count"
                        onClick={() => {
                            if (qtdComida > 0) setQtdComida(qtdComida - 1);
                        }}
                    >
                        - 
                    </button>
                    
                    <div>
                        <button onClick={() => setQtdComida(0)}>
                            Apagar Tudo
                        </button>
                    </div>
                    
                    <div>
                        <button
                            onClick={() => {
                                if(qtdComida > 0) {
                                   
                                    adicionarCarrinho({ id, nome, preco, foto, categoria }, qtdComida);
                                    alert(`${qtdComida} ${nome} adicionado(s) ao carrinho`);
                                    setQtdComida(0); 
                                } else {
                                    alert("Selecione uma quantidade antes de adicionar!");
                                }
                            }}
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardapio;