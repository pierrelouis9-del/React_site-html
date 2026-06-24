import "./Funcionario.css"


function Funcionario({ nome, cargo }) {
    return (

        <>
            <div className="Fun">
                <h2>Nome: {nome}</h2>

                <p>{cargo}</p>
            </div>

           
        </>


    )
}

export default Funcionario