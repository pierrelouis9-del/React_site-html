import "./Funcionario.css"


function Funcionario({ nome, cargo,foto }) {
    return (

        <>
        <div className="container-fun" >

           <div className="Fun">
           <img src={foto} alt={nome} />

                <h2>Nome: {nome}</h2>

                <p><strong>Cargo:</strong> {cargo}</p>
            </div>
  
        </div>
           
           
        </>


    )
}

export default Funcionario