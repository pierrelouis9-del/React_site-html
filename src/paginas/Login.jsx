import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ title }) {

  
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if ((usuario === "admin" || usuario === "empregado") && senha === "1234") {
      navigate("/Cozinha");
    } else {
      navigate("/Home");
    }
  }

  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>

        <div>
          <h2>Login</h2>

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