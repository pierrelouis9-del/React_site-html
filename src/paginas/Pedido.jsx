import React from 'react';
import Header from '../components/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import './Pedido.css';

function Pedido() {
  const navigate = useNavigate();
  const location = useLocation();
  const statusFluxo = ['Recebido', 'Preparando', 'Pronto', 'Entregue'];

  const carrinho = location.state?.carinho || JSON.parse(localStorage.getItem("meuCarrinho")) || [];
  const [numeroPedido, setNumeroPedido] = React.useState("");
  const [horario, setHorario] = React.useState("");
  
   const [numeroMesa, setNumeroMesa] = React.useState("");
  const statusAtual = 'Recebido';

  React.useEffect(() => {
    setNumeroPedido(Math.floor(Math.random() * 10000));
    setNumeroMesa(Math.floor(Math.random() * 20) + 1);

    const horaAtual = new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
    setHorario(horaAtual);
  }, []);

  return (
    <div className="pedido-page">
      <Header titulo="Seu Pedido" subtitulo="Acompanhe o status" />

      <div className="pedido-container">
        
        <button 
          className="btn-voltar"
          onClick={() => navigate('/Home')} 
        >
          Voltar ao Início
        </button>

        <div className="pedido-card">
          <div className="pedido-cabecalho">
            <h1>PEDIDO #{numeroPedido}</h1>
            <div className="pedido-info-meta">
              <p>MESA: {numeroMesa}</p>
              <p>Horário: {horario}</p>
            </div>
          </div>

          <div className="pedido-itens-section">
            <h3>Itens:</h3>
            {carrinho.length === 0 ? (
              <p className="pedido-vazio">Nenhum item no pedido.</p>
            ) : (
              <ul className="pedido-lista">
                {carrinho.map((item, index) => (
                  <li key={index} className="pedido-item">
                    <span className="pedido-item-qtd">
                      {item.quantidade}x
                    </span>
                    {item.nome}
                  </li>
                ))}
              </ul>
            )}
          </div>



          <div className="pedido-status-section">
            <h2>Status</h2>
            
            <div className="status-fluxo">
              {statusFluxo.map((status, index) => {
                const isActive = status === statusAtual;
                return (
                  <React.Fragment key={status}>
                    <div className={`status-step ${isActive ? 'active' : ''}`}>
                      {isActive ? `[ ${status} ]` : status}
                    </div>
                    {index < statusFluxo.length - 1 && (
                      <span className="status-arrow">➔</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

        </div>          <div className="pedido-endereco">
            <p>senaipr.org.br</p>
            <p>Rua Senador Accioly Filho, 298 | Cidade Industrial de Curitiba</p>
            <p>81310-000 | Curitiba-PR | (41) 3271-7100</p>
          </div>
      </div>
    </div>
  );
}

export default Pedido;