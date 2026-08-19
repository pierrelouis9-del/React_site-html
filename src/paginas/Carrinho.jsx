import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./Carrinho.css";

function Carrinho() {
    function handleLimparCarrinho() {
        setCarrinho([]);
        localStorage.removeItem("meuCarrinho");
    }
    const [carrinho, setCarrinho] = useState([]); 
    const [itensCarrinho, setItensCarrinho] = useState([]);
    const usuario = localStorage.getItem("usuario")

    useEffect(() => {
        const dadosSalvos = localStorage.getItem("meuCarrinho");
        if (dadosSalvos) {
            setItensCarrinho(JSON.parse(dadosSalvos));
        }
    }, []);

    const totalItens = itensCarrinho.reduce((acc, item) => acc + item.quantidade, 0);
    const valorTotal = itensCarrinho.reduce((acc, item) => acc + (item.quantidade * item.preco), 0);

    return (
        <>
            <Header titulo="Carrinho" subtitulo="Resumo do seu pedido" limparCarrinho={handleLimparCarrinho}/>
            
            <main className="carrinho-container">
                <h2>Carrinho de Compras</h2>
                <h2>Usuario: {usuario}</h2>


                {itensCarrinho.length === 0 ? (
                    <p>Seu carrinho está vazio no momento.</p>
                ) : (
                    <>
                        <table className="tabela-carrinho">
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Categoria</th>
                                    <th>Qtde</th>
                                    <th>Preço (Subtotal)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itensCarrinho.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.nome}</td>
                                        <td>{item.categoria}</td>
                                        <td>{item.quantidade}</td>
                                        <td>R$ {(item.preco * item.quantidade).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div style={{ marginTop: "20px", fontSize: "18px" }}>
                            <p>Total de itens: <span>{totalItens}</span></p>
                            <p>Valor Total: <span>R$ {valorTotal.toFixed(2)}</span></p>
                        </div>
                    </>
                )}
            </main>
        </>
    );
}

export default Carrinho;