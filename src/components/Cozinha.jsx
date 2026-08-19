import "./Cozinha.css";
import Header from "./Header";
import Funcionario from "./Funcionario";
import { useState, useEffect } from "react";

function Cozinha() {
    function handleLimparCarrinho() {
        setCarrinho([]);
        localStorage.removeItem("meuCarrinho");
    }

    const [carrinho, setCarrinho] = useState([]);
    const [statusAtual, setStatusAtual] = useState("Recebido");
    const [numeroPedido, setNumeroPedido] = useState("");
    const [horario, setHorario] = useState("");
    const [mesa, setMesa] = useState("12");
    const usuario = localStorage.getItem("usuario")
    
    const [mostrarFuncionarios, setMostrarFuncionarios] = useState(false);

    const funcionarios = [
        { id: 1, nome: "João Pereira", cargo: "Manager", foto: "/Img/Joao.jpg", experiencia: 3 },
        { id: 2, nome: "Jean Sabara", cargo: "Atendente", foto: "/Img/Jean.jpg", experiencia: 5 },
        { id: 3, nome: "Marian Rodriguez", cargo: "Atendente", foto: "/Img/Marian.jpg", experiencia: 6 }
    ];

    useEffect(() => {
        const dadosCarrinho = localStorage.getItem("meuCarrinho");
        if (dadosCarrinho) setCarrinho(JSON.parse(dadosCarrinho));

        const dadosPedido = localStorage.getItem("numeroPedido");
        if (dadosPedido) {
            setNumeroPedido(dadosPedido);
        } else {
            const novoNum = Math.floor(Math.random() * 10000);
            localStorage.setItem("numeroPedido", novoNum);
            setNumeroPedido(novoNum);
        }

        const dadosHora = localStorage.getItem("horarioPedido");
        if (dadosHora) {
            setHorario(dadosHora);
        } else {
            const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            localStorage.setItem("horarioPedido", horaAtual);
            setHorario(horaAtual);
        }

       
    }, []);

    function avancaStatus() {
        let proximoStatus = statusAtual;

        if (statusAtual === "Recebido") proximoStatus = "Preparando";
        else if (statusAtual === "Preparando") proximoStatus = "Pronto";
        else if (statusAtual === "Pronto") proximoStatus = "Entregue";

        setStatusAtual(proximoStatus);
        localStorage.setItem("statusPedido", proximoStatus);  
    }

    return (
        <>
            <Header 
                titulo="Lanchonete Juv 2.0" 
                subtitulo="O melhor do mundo"
                limparCarrinho={handleLimparCarrinho} 
            />

            <div className="cozinha-layout-principal">
               
                <div className="pedido-container">
                    <header>
                        
                        <h1>Cozinha</h1>
                        <br />
                        <h2>PEDIDO #{numeroPedido}</h2>
                        <div className="comanda-info">
                            <p>Mesa: {mesa}</p>
                            <p>Horário: {horario}</p>
                        </div>
                    </header>

                    <hr className="divisor" />

                    <section className="comanda-itens">
                        <ul id="lista-itens">
                            {carrinho.length === 0 ? (
                                <p>Nenhum pedido no momento.</p>
                            ) : (
                                carrinho.map((item) => (
                                    <li key={item.id}>
                                        <span className="qtd">{item.quantidade}x</span>
                                        <span className="produto">{item.nome}</span>
                                    </li>
                                ))
                            )}
                        </ul>
                    </section>

                    <hr className="divisor" />

                    <section className="comanda-status">
                        <h2>Status</h2>
                        <div className="fluxo-vertical">
                            <div className={`status-badge ${statusAtual === 'Recebido' ? 'status-ativo' : ''}`}>Recebido</div>
                            <div className="seta-vertical">ー▶</div>
                            <div className={`status-badge ${statusAtual === 'Preparando' ? 'status-ativo' : ''}`}>Preparando</div>
                            <div className="seta-vertical">ー▶</div>
                            <div className={`status-badge ${statusAtual === 'Pronto' ? 'status-ativo' : ''}`}>Pronto</div>
                            <div className="seta-vertical">ー▶</div>
                            <div className={`status-badge ${statusAtual === 'Entregue' ? 'status-ativo' : ''}`}>Entregue</div>
                        </div>

                        <button onClick={avancaStatus}>
                            Avançar Status do Pedido
                        </button>
                    </section>
                </div>

         
                <aside className="sidebar-funcionarios">
                    <button 
                        className="btn-toggle-func"
                        onClick={() => setMostrarFuncionarios(!mostrarFuncionarios)}
                    >
                        {mostrarFuncionarios ? "Ocultar Equipe" : "Ver Funcionários"}
                    </button>

                    {mostrarFuncionarios && (
                        <div className="lista-func-container">
                            <h3>Equipe na Cozinha</h3>
                            {funcionarios.map((func) => (
                                <Funcionario
                                    key={func.id}
                                    nome={func.nome}
                                    cargo={func.cargo}
                                    foto={func.foto}
                                    experiencia={func.experiencia}
                                />
                            ))}
                        </div>
                    )}
                </aside>
            </div>
        </>
    );
}

export default Cozinha;