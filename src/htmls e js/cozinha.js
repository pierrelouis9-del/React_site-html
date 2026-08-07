// Aguarda o HTML carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Função para injetar a hora atual no pedido
    const dataAtual = new Date();
    const horaFormatada = dataAtual.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    const elementoHora = document.getElementById('hora-pedido');
    if (elementoHora) {
        elementoHora.innerText = horaFormatada;
    }

    // 2. Chama a função que carrega os itens do pedido
    carregarPedido();
});

// Função principal que lê os dados e monta a lista na tela
function carregarPedido() {
    const listaHTML = document.getElementById('lista-itens');
    
    // Segurança: se não achar a lista no HTML, interrompe a função
    if (!listaHTML) return; 
    
    // Busca os dados salvos pelo carrinho.js na memória do navegador
    const carrinhoSalvo = localStorage.getItem('carrinhoLanchonete');

    if (carrinhoSalvo) {
        // Converte o texto (JSON) salvo de volta para um Array utilizável
        const carrinho = JSON.parse(carrinhoSalvo);

        // Se o array estiver vazio
        if (carrinho.length === 0) {
            listaHTML.innerHTML = '<li class="vazio">Nenhum pedido recebido.</li>';
            return;
        }

        // Limpa a lista antes de preencher com os novos itens
        listaHTML.innerHTML = '';

        // Percorre cada item do carrinho e cria a estrutura HTML (<li>)
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="qtd">${item.quantidade}x</span>
                <span class="nome-produto">${item.produto}</span>
            `;
            listaHTML.appendChild(li);
        });
    } else {
        // FALLBACK DE TESTE: O que aparece se não houver nada no localStorage ainda
        listaHTML.innerHTML = `
            <li><span class="qtd">2x</span> <span class="nome-produto">X-Burguer</span></li>
            <li><span class="qtd">1x</span> <span class="nome-produto">Batata Frita</span></li>
            <li><span class="qtd">2x</span> <span class="nome-produto">Coca-Cola</span></li>
        `;
    }
}