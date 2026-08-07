import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pedido({ carrinho, numeroPedido, mesa, horario, statusAtual }) {
  const navigate = useNavigate();
  const statusFluxo = ['Recebido', 'Preparando', 'Pronto', 'Entregue'];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: 'white', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      
      <button 
        onClick={() => navigate('/cardapio')} 
        style={{ marginBottom: '20px', padding: '10px 20px', backgroundColor: '#374151', color: 'white', borderRadius: '5px', cursor: 'pointer' }}
      >
        Voltar ao Cardápio
      </button>

      <div style={{ width: '100%', maxWidth: '800px', backgroundColor: '#1F2937', borderRadius: '15px', border: '1px solid #374151', overflow: 'hidden' }}>
        
        {/* Cabeçalho */}
        <div style={{ backgroundColor: '#F59E0B', color: '#111827', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '2rem', margin: 0 }}>PEDIDO #{numeroPedido}</h1>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>MESA: {mesa}</p>
            <p style={{ margin: 0 }}>Horário: {horario}</p>
          </div>
        </div>

        {/* Itens do Pedido */}
        <div style={{ padding: '30px' }}>
          {carrinho.length === 0 ? (
            <p style={{ fontSize: '1.5rem', textAlign: 'center', color: '#9CA3AF' }}>Nenhum item no pedido.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {carrinho.map((item, index) => (
                <li key={index} style={{ fontSize: '1.8rem', borderBottom: '1px solid #374151', paddingBottom: '15px', marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ backgroundColor: '#374151', color: '#FCD34D', padding: '5px 15px', borderRadius: '8px', marginRight: '20px', fontWeight: 'bold' }}>
                    {item.quantidade}x
                  </span>
                  {item.nome}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Endereço Senai */}
        <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#9CA3AF', padding: '10px' }}>
            <p style={{ margin: '2px 0' }}>senaipr.org.br</p>
            <p style={{ margin: '2px 0' }}>Rua Senador Accioly Filho, 298 | Cidade Industrial de Curitiba</p>
            <p style={{ margin: '2px 0' }}>81310-000 | Curitiba-PR | (41) 3271-7100</p>
        </div>

        {/* Status */}
        <div style={{ backgroundColor: '#030712', padding: '20px', borderTop: '1px solid #374151', textAlign: 'center' }}>
          <h2 style={{ color: '#9CA3AF', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>
            Status
          </h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
            {statusFluxo.map((status, index) => {
              const isActive = status === statusAtual;
              return (
                <React.Fragment key={status}>
                  <div style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    backgroundColor: isActive ? '#2563EB' : '#1F2937',
                    color: isActive ? 'white' : '#6B7280',
                    border: isActive ? 'none' : '1px solid #374151'
                  }}>
                    {isActive ? `[ ${status} ]` : status}
                  </div>
                  {index < statusFluxo.length - 1 && (
                    <span style={{ color: '#4B5563', fontSize: '1.5rem' }}>➔</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pedido;