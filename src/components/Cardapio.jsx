import "./Cardapio.css"

function Cardapio({burguer,preco1,salada,preco2,refrigerente,preco3}){
return(
    <div className="card">
    <div>
        <h2>{burguer} </h2>
        <p>R$ {preco1}</p>
    </div>

    <div>
    <h2>{salada} </h2>
    <p>R$ {preco2}</p> 
    </div>

    <div>
    <h2>{refrigerente} </h2>
    <p>R$ {preco3}</p>  
    </div>
    
    
    </div>
)
}
export default  Cardapio