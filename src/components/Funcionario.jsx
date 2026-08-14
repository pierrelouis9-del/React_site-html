import "./Funcionario.css"


function Funcionario({ nome, cargo, foto, experiencia }) {

    
    return (

        <>
        <div className="container-fun" >

           <div className="Fun">
           <img src={foto} alt={nome} />

                <h2>Nome: {nome}</h2>

                <p><strong>Cargo: </strong> {cargo}</p>

                <p><strong>Experiencia: </strong> {experiencia} Anos</p>
            </div>
  
        </div>
           

        </>


    )
}

export default Funcionario