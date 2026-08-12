import "./Header.css";
import { Link } from "react-router-dom";

function Header({
    titulo,
    subtitulo,
    carrinho,
    limparCarrinho,
    aoClicarVerCarrinho,
    textoBotaoCarrinho
}) {

    const totalItens = carrinho.reduce(
        (acumulador, item) =>
            acumulador + item.quantidade,
        0
    );

    const valorTotal = carrinho.reduce(
        (acumulador, item) =>
            acumulador + (item.quantidade * item.preco),
        0
    );

    return (
        <>

            <div className="titulo">

                <h1>{titulo}</h1>

                <h2>{subtitulo}</h2>

                <div className="carrinho">

                    <h3>
                        Carrinho ({totalItens} itens)
                    </h3>

                    <h4>
                        Total a pagar: R$ {valorTotal.toFixed(2)}
                    </h4>

                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            justifyContent: "center",
                            marginTop: "10px"
                        }}
                    >

                        <button
                            onClick={aoClicarVerCarrinho}
                            style={{
                                padding: "10px",
                                backgroundColor: "#007bff",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            {textoBotaoCarrinho}
                        </button>

                        <button
                            onClick={limparCarrinho}
                            style={{
                                padding: "10px",
                                backgroundColor: "#dc3545",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Limpar Carrinho
                        </button>

                    </div>

                </div>

            </div>

            <nav className="menu">

                <Link to="/Home">
                    Home
                </Link>

                <Link to="/Carrinho">
                    Carrinho
                </Link>

                <Link to="/Pedido">
                    Pedido
                </Link>

                <Link to="/Login">
                    Login
                </Link>

            </nav>

        </>
    );
}

export default Header;