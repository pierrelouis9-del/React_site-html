import './Header.css'

function Header({ titulo, subtitulo, carrinho, limparCarrinho }) {
    return (

        <>
            <div className="titulo">
                <h1>{titulo}</h1>

                <h2>{subtitulo}</h2>

                <h3 className='carrinho'>Carrinho({carrinho})</h3>
                <button onClick={() => limparCarrinho(0)}>
                    Limpar
                </button>
            </div>


        </>


    )
}

export default Header