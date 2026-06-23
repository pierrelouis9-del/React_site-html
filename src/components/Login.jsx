import './Login.css'

function Login ({title}){
    return(
        
        <>
        
       <div className="title">
        <h1> {title} </h1>
        <div>
            <input type="text" placeholder='Usuario'/>
            <input type="text" placeholder='senha'/>
            <button> clicque aqui</button>

        </div>
        
        </div>

        </>
       

        

      
        
    )
}
export default Login