import { useState } from "react";
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

  const [Carrinho, setCarrinho] = useState(0);

  const funcionarios = [
    { id: 1, nome: "João Pereira", cargo: "Manager", foto: "/Img/Joao.jpg", experiencia: 3},
    { id: 2, nome: "Jean Sabara", cargo: "Atendente", foto: "/Img/Jean.jpg", experiencia: 5 },
    { id: 3, nome: "Marian Rodrguez", cargo: "Atendente", foto: Marian, experiencia: 6 }
  ]

  const lanchonetes = [
    { id: 1, nome: "X-Burguer", preco: 15.90, foto:Burger , categoria : "Comida" },
    { id: 2, nome: "X-Salada", preco: 17.90 , foto: Salada , categoria : "Comida" },
    { id: 3, nome: "X-ovo", preco: 17.90 , foto: "/Img/x-ovo.jpg" , categoria : "Comida" },
    { id: 4, nome: "X-becon", preco: 17.90 , foto: "/Img/x-becon.jpg" , categoria : "Comida" },
    { id: 5, nome: "X-tudo", preco: 17.90 , foto: "/Img/x-tudo.jpg" , categoria : "Comida" },
    { id: 6, nome: "Fanta-laranja", preco: 6.00 ,foto: "/Img/fanta-laranja.webp" , categoria : "Bebida " },
    { id: 7, nome: "Coca-cola", preco: 6.00 ,foto: "/Img/cocacola.jpg", categoria : "Bebida " },
    { id: 8, nome: "Pepsi", preco: 6.00 ,foto: "/Img/pepsi.jpg", categoria : "Bebida " },

  ]
  return (
    <>
    <Header titulo="Lanchonete Juv 2.0"
        subtitulo="O melhor do mundo"
        carrinho= {Carrinho}
        limparCarrinho={setCarrinho}
      />

 <Login title="Login" />
   


    <div className="lanche">
     

      {lanchonetes.map((lanche) => (
        <Cardapio
          key={lanche.id}
          nome={lanche.nome}
          preco={lanche.preco}
          foto ={lanche.foto}
          categoria={lanche.categoria}
          adicionarCarrinho={setCarrinho}
          qtdCarrinho={Carrinho}
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
        foto={gestionario.foto}
        experiencia={gestionario.experiencia}
        />
      ))
    }
  

  </div>
    


      <Contador />
  
  
   

</>
  )
}
export default App