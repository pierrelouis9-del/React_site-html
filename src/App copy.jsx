import { useState } from "react";
import Header from "./components/Header";
import Login from "./paginas/Login";
import Cardapio from "./components/Cardapio";
import Funcionario from "./components/Funcionario";
import Contador from "./components/Contador";
import Carrinho from "./paginas/Carrinho";
import Cozinha from "./components/Cozinha";
import "./App.css";

import Burger from "/public/Img/Burger.jpg";
import Salada from "/public/Img/Salada.jpg";
import Marian from "/public/Img/Marian.jpg";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const funcionarios = [
    { id: 1, nome: "João Pereira", cargo: "Manager", foto: "/Img/Joao.jpg", experiencia: 3 },
    { id: 2, nome: "Jean Sabara", cargo: "Atendente", foto: "/Img/Jean.jpg", experiencia: 5 },
    { id: 3, nome: "Marian Rodrguez", cargo: "Atendente", foto: Marian, experiencia: 6 }
  ];

  const lanchonetes = [
    { id: 1, produto: "X-Burguer", preco: 15.90, foto: Burger, categoria: "Comida" },
    { id: 2, produto: "X-Salada", preco: 17.90, foto: Salada, categoria: "Comida" },
    { id: 3, produto: "X-ovo", preco: 17.90, foto: "/Img/x-ovo.jpg", categoria: "Comida" },
    { id: 4, produto: "X-becon", preco: 17.90, foto: "/Img/x-becon.jpg", categoria: "Comida" },
    { id: 5, produto: "X-tudo", preco: 17.90, foto: "/Img/x-tudo.jpg", categoria: "Comida" },
    { id: 6, produto: "Fanta-laranja", preco: 6.00, foto: "/Img/fanta-laranja.webp", categoria: "Bebida" },
    { id: 7, produto: "Coca-cola", preco: 6.00, foto: "/Img/cocacola.jpg", categoria: "Bebida" },
    { id: 8, produto: "Pepsi", preco: 6.00, foto: "/Img/pepsi.jpg", categoria: "Bebida" },
  ];

  const handleAdicionarCarrinho = (itemAdicionado, quantidade) => {
    if (quantidade <= 0) return;

    setCarrinho((carrinhoAtual) => {
      const itemJaExiste = carrinhoAtual.find((item) => item.id === itemAdicionado.id);
      
      if (itemJaExiste) {
        return carrinhoAtual.map((item) =>
          item.id === itemAdicionado.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      }
      return [...carrinhoAtual, { ...itemAdicionado, quantidade }];
    });
  };

  return (
    <>
      <Header 
        titulo="Lanchonete Juv 2.0"
        subtitulo="O melhor do mundo"
        carrinho={carrinho} 
        limparCarrinho={() => setCarrinho([])} 
        aoClicarVerCarrinho={() => setMostrarCarrinho(!mostrarCarrinho)}
        textoBotaoCarrinho={mostrarCarrinho ? "Ocultar Carrinho" : "Ver Carrinho"}
      />

      {/* A área do carrinho renderizada logo abaixo do Header */}
      {mostrarCarrinho && (
        <div className="area-carrinho"   >       <h2>Seu Carrinho de Compras</h2>
          
          {carrinho.length === 0 ? (
            <p>Seu carrinho está vazio no momento.</p>
          ) : (
            carrinho.map((item) => (
              <Carrinho
                key={item.id}
                produto={item.produto}
                preco={item.preco}
                foto={item.foto}
                categoria={item.categoria}
                quantidade={item.quantidade} 
              />
            ))
          )}
        </div>
      )}

      <Login title="Login" />

      <div className="lanche">
        {lanchonetes.map((lanche) => (
          <Cardapio
            key={lanche.id}
            id={lanche.id} 
            nome={lanche.produto}
            preco={lanche.preco}
            foto={lanche.foto}
            categoria={lanche.categoria}
            adicionarCarrinho={handleAdicionarCarrinho} 
          />
        ))}
      </div>

      <div className="Gestion-stm">
        {funcionarios.map((gestionario) => (
          <Funcionario          
            key={gestionario.id}
            nome={gestionario.nome}
            cargo={gestionario.cargo} 
            foto={gestionario.foto}
            experiencia={gestionario.experiencia}
          />
        ))}
      </div>

      <Cozinha carrinho={carrinho} />

      <Contador />
    </>
  );
}

export default App;