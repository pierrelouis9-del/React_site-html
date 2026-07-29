import Header from "./components/Header";
import Login from "./components/Login";
import Cardapio from "./components/Cardapio";
import Funcionario from "./components/Funcionario";
import Contador from "./components/Contador";
import "./App.css";
import Burger from "/public/Img/Burger.jpg";
import Salada from "/public/Img/Salada.jpg";
import Refrigerente from "/public/Img/Refrigerente.jpg";
import Marian from "/public/Img/Marian.jpg"

function App() {

  const funcionarios = [
    { id: 1, nome: "João Pereira", cargo: "Manager", foto: "/Img/Joao.jpg"},
    { id: 2, nome: "Jean Sabara", cargo: "Atendente", foto: "/Img/Jean.jpg" },
    { id: 1, nome: "Marian Rodrguez", cargo: "Atendente", foto: Marian }
  ]

  const lanchonetes = [
    { id: 1, nome: "x-Burguer", preco: 15.90, foto:Burger  },
    { id: 2, nome: "X-Salada", preco: 17.90 , foto: Salada },
    { id: 1, nome: "Refrigerante", preco: 6.00 ,foto: Refrigerente}
  ]
  return (
    <>
    <Header titulo="Lanchonete Juv 2.0"
        subtitulo="O melhor do mundo"
      />

 <Login title="Login" />
   


    <div className="lanche">
     

      {lanchonetes.map((lanche) => (
        <Cardapio
          key={lanche.id}
          nome={lanche.nome}
          preco={lanche.preco}
          foto ={lanche.foto}
          
        />
      ))}

    </div>

  <div className="Gestion-stm">
    {
      funcionarios.map((gestionario)  =>(
        <Funcionario          
        key={gestionario.id}
        nome={gestionario.nome}
        cargo={gestionario.cargo} 
        foto={gestionario.foto}/>
      ))
    }
  

  </div>
    


      <Contador />
  
  
   

</>
  )
}
export default App