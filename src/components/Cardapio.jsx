import "./Cardapio.css";

import { useState } from "react";




function Cardapio({ nome, preco, foto , categoria, adicionarCarrinho , qtdCarrinho}) {

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

                    <button onClick={() => setQtdComida(qtdComida + 1)}>
                        Adicionar +1
                    </button>

                    <button
                        onClick={() => {
                            if (qtdComida > 0) {
                                setQtdComida(qtdComida - 1);
                            }
                        }}
                    >
                        Remover -1
                    </button>
                <div>
                    <button 
                    onClick={() => {
                        setQtdComida(0)
                        qtdComida(0)  
                    }}> Apagar Tudo</button>
                </div>
                <div>
                <button
    onClick={() => {
        adicionarCarrinho(qtdCarrinho + qtdComida);

        alert(
            qtdComida +
            " " +
            nome +
            " adicionado ao carrinho"
        );
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

function calculador() {

}
export default Cardapio;