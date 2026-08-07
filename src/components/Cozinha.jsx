import "./Cozinha.css";


function Cozinha({ carrinho }) {
    return (
        <>
            <div className="pedido-container">


                <header>
                    <h1>PEDIDO </h1>
                    <div className="comanda-info">
                        <p>Mesa: 03</p>
                        <p>Horário: <span id="hora-pedido">12:15</span></p>
                    </div>
                </header>

                <hr className="divisor" />


                <section className="comanda-itens">
                    <ul id="lista-itens">

                        {carrinho.map((item) => (
                            <li key={item.id}>
                                <span className="qtd">
                                    {item.quantidade}
                                </span>

                                <span className="produto">
                                    {item.produto}
                                </span>
                            </li>
                        ))}

                    </ul>
                </section>




                <hr className="divisor" />


                <section className="comanda-status">
                    <h2>Status</h2>

                    <div className="fluxo-vertical">
                        <div className="status-badge">Recebido</div>

                        <div className="seta-vertical">
                            │<br />▼
                        </div>

                        <div className="status-badge status-ativo">[ Preparando ]</div>

                        <div className="seta-vertical">
                            │<br />▼
                        </div>

                        <div className="status-badge">Pronto</div>

                        <div className="seta-vertical">
                            │<br />▼
                        </div>

                        <div className="status-badge">Entregue</div>
                    </div>
                </section>

            </div>
        </>
    );
}

export default Cozinha;