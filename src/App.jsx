import Header from "./components/Header";
import Login from "./components/Login";
import Cardapio from "./components/Cardapio";
import Funcionario from "./components/Funcionario";
import Contador from "./components/Contador";

function App() {

  const lanchonetes = [
    { id: 1, nome: "x-Burguer", preco: 15.90 },
    { id: 2, nome: "X-Salada", preco: 17.90 },
    { id: 1, nome: "Refrigerante", preco: 6.00 }
  ]
  return (
    <>
      <Header titulo="Lanchonete Juv 2.0"
        subtitulo="O melhor do mundo"
      />

      <Login title="Login" />

      {lanchonetes.map = (lanche => (
        <Cardapio
          key={lanche.id}
          nome={lanche.nome}
          preco={lanche.preco}
        />

      ))}



     

      <Funcionario

        nome="João"
        cargo="Atendente" />

      <Contador />
    </>


  )
}
export default App