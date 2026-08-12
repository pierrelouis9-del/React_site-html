import "./Carrinho.css";
import Header from "../components/Header";

function Carrinho({
    produto,
    quantidade,
    preco,
    categoria,
    
}) {

    const total = quantidade * preco;

    return (
       <>
                <Header
                titulo="Lanchonete Juv 2.0"
                subtitulo="O melhor do mundo"
                carrinho={carrinho}
               
            />
            
        <tr>

            <td>
                {produto}
            </td>

            <td>
                {categoria}
            </td>

            <td>
                {quantidade}
            </td>

            <td>
                R$ {total.toFixed(2)}
            </td>



        </tr>
        
        </>
    );
}

export default Carrinho;