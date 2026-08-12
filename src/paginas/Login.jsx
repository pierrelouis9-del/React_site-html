import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login({ title }) {
  const navigate = useNavigate();

  function fazerLogin() {
   
    navigate("/Home");
  }

  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>

        <div>
          <h2>Login</h2>

          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />

          <button onClick={fazerLogin}>
            Clique aqui
          </button>

          <a href="#">Esqueceu a senha</a>
        </div>
      </div>
    </div>
  );
}

export default Login;