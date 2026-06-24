import Header from "./components/Header";
import Login from "./components/Login";
import Cardapio  from "./components/cardapio";
import Funcionario from "./components/Funcionario";

function App() {
  return (
    <>
      <Header titulo="Lanchonete Juv 2.0"
        subtitulo="O melhor do mundo"
      />

      <Login title ="Login"/>

      <Cardapio 
      burguer="x-Burguer"
      preco1="15.90"

      salada="X-Salada"
      preco2="17.90"

      refrigerente="Refrigerante"
      preco3="6.00"
      
      />

      <Funcionario
      
      nome="João"
      cargo="Atendente" />
    </>


  )
}
export default App