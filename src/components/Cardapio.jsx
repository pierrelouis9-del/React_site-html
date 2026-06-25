import "./Cardapio.css"
import Burger from "./Img/Burger.jpg";
import Refrigerente from "./Img/Refrigerente.jpg";
import Salada from "./Img/Salada.jpg";

function Cardapio({burguer,preco1,salada,preco2,refrigerente,preco3}){
return(
    <div className="card">
    <div className="b">
        <div className="bur">
            <img src={Burger} alt="Burger" />
        </div>

        <h2>{burguer} </h2>
        <p>R$ {preco1}</p>
    </div>

    <div  className="s">
        <div  className="salada">
            <img src={Salada} alt="Salada" />
        </div>

    <h2>{salada} </h2>
    <p>R$ {preco2}</p> 
    </div>

    <div className="r">
        <div  className="refri">
            <img src={Refrigerente} alt="" />
        </div>

    <h2>{refrigerente} </h2>
    <p>R$ {preco3}</p>  
    </div>
    
    
    </div>
)
}
export default  Cardapio