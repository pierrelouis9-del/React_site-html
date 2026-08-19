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

    const usuario = localStorage.getItem("usuario")

    return (
        <>

            <div className="titulo">

                <h1>{titulo}</h1>

                <h2>{subtitulo}</h2>

                <div  >
                 <h2 className="usuario">Usuario: {usuario}</h2>
            </div>

              
                        

                        <button className="limpar-carrinho"
                        
                            onClick={limparCarrinho}
                           
                        >
                            Limpar Carrinho
                        </button>


              

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