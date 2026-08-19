import { useState } from "react";

import Header from "../components/Header";
import Cardapio from "../components/Cardapio";
import Funcionario from "../components/Funcionario";
import Contador from "../components/Contador";
import Cozinha from "../components/Cozinha";
import { useNavigate } from "react-router-dom";

import Burger from "/public/Img/Burger.jpg";
import Salada from "/public/Img/Salada.jpg";
import Marian from "/public/Img/Marian.jpg";

import "./Home.css";

function Home() {
    const navigate = useNavigate();

   
    

    const [carrinho, setCarrinho] = useState(() => {
        const carrinhoSalvo = localStorage.getItem("meuCarrinho");
        return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    });



    const funcionarios = [
        {
            id: 1,
            nome: "João Pereira",
            cargo: "Manager",
            foto: "/Img/Joao.jpg",
            experiencia: 3
        },
        {
            id: 2,
            nome: "Jean Sabara",
            cargo: "Atendente",
            foto: "/Img/Jean.jpg",
            experiencia: 5
        },
        {
            id: 3,
            nome: "Marian Rodriguez",
            cargo: "Atendente",
            foto: Marian,
            experiencia: 6
        }
    ];

    const lanchonetes = [
        { id: 1, produto: "X-Burguer", preco: 15.90, foto: Burger, categoria: "Comida" },
        { id: 2, produto: "X-Salada", preco: 17.90, foto: Salada, categoria: "Comida" },
        { id: 3, produto: "X-ovo", preco: 17.90, foto: "/Img/x-ovo.jpg", categoria: "Comida" },
        { id: 4, produto: "X-becon", preco: 17.90, foto: "/Img/x-becon.jpg", categoria: "Comida" },
        { id: 5, produto: "X-tudo", preco: 17.90, foto: "/Img/x-tudo.jpg", categoria: "Comida" },
        { id: 6, produto: "Fanta-laranja", preco: 6.00, foto: "/Img/fanta-laranja.webp", categoria: "Bebida" },
        { id: 7, produto: "Coca-cola", preco: 6.00, foto: "/Img/cocacola.jpg", categoria: "Bebida" },
        { id: 8, produto: "Pepsi", preco: 6.00, foto: "/Img/pepsi.jpg", categoria: "Bebida" }
    ];

    function handleAdicionarCarrinho(itemAdicionado, quantidade) {
        if (quantidade <= 0) return;

        setCarrinho((carrinhoAtual) => {
            let novoCarrinho;
            const itemJaExiste = carrinhoAtual.find((item) => item.id === itemAdicionado.id);

            if (itemJaExiste) {
                novoCarrinho = carrinhoAtual.map((item) =>
                    item.id === itemAdicionado.id
                        ? { ...item, quantidade: item.quantidade + quantidade }
                        : item
                );
            } else {
                novoCarrinho = [...carrinhoAtual, { ...itemAdicionado, quantidade }];
            }

            localStorage.setItem("meuCarrinho", JSON.stringify(novoCarrinho));
            return novoCarrinho;
        });
    }

    function handleLimparCarrinho() {
        setCarrinho([]);
        localStorage.removeItem("meuCarrinho");
    }

    return (
        <>


            <Header
                titulo="Lanchonete Juv"
                subtitulo="O melhor do mundo"
                carrinho={carrinho}
                limparCarrinho={handleLimparCarrinho}
            />

           


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

            <button
                className="btn-finalizar-pedido"
                onClick={() => navigate('/Pedido', { state: { carrinho } })}
            >
                Finalizar Pedido
            </button>





            <Contador />
        </>
    );
}

export default Home;