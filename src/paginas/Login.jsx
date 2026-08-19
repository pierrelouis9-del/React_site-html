import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ title }) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemAlerta, setMensagemAlerta] = useState("");

  function handleLogin() { 
    if ((usuario === "admin") && senha === "1234") {
      setMensagemAlerta("Bem-vindo Admin!");
      localStorage.setItem("chave", "valor");
      localStorage.setItem("Usuario", usuario);
      setTimeout(() => navigate("/Cozinha"), 1500);

    } else if ((usuario === "JUVENSKY" && senha === "1234")) {
      setMensagemAlerta("Bem-vindo JUVENSKY!");
      localStorage.setItem("chave", "valor");
      localStorage.setItem("usuario", usuario);
      setTimeout(() => navigate("/Cozinha"), 1500);

    } else if ((usuario === "empregado") && senha === "1234") {
      setMensagemAlerta("Bem-vindo(a) caro Empregado!");
      localStorage.setItem("chave", "valor");
      localStorage.setItem("usuario", usuario);
      setTimeout(() => navigate("/Home"), 1500);

    } else if ((usuario === "cliente") && senha === "1234") {
      setMensagemAlerta("Bem-vindo(a) na Lanchonete do JUV caro Cliente!");
      localStorage.setItem("chave", "valor");
      localStorage.setItem("usuario", usuario);
      setTimeout(() => navigate("/Home"), 1500);
      
    } else {
      setMensagemAlerta("Usuário não reconhecido. Tente 'cliente' e '1234'");
      setTimeout(() => setMensagemAlerta(""), 3000); 
    }
  }

  return (
    <div className="container">
      
      {mensagemAlerta !== "" && (
        <div className="alerta-estilizado">
          {mensagemAlerta}
        </div>
      )}

      <div className="title">
        <h1>{title}</h1>

        <div>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button onClick={handleLogin}>
            Clique aqui
          </button>

          <a href="#">Esqueceu a senha</a>
        </div>
      </div>
    </div>
  );
}

export default Login;