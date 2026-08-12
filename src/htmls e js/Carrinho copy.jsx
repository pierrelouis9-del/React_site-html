

function Carrinho({ foto, produto, quantidade, preco, categoria }) {
    const total = quantidade * preco;

    return (
        <section >
            <div>
                <img src={foto} alt={produto} style={{ width: "100px" }} />
            </div>

            <div>
                <h3>{produto}</h3>
            </div>

            <div>Categoria: {categoria}</div>

            <div>Preço Unitário: R$ {preco.toFixed(2)}</div>

            <div>Quantidade: {quantidade}</div>

            <div style={{ fontWeight: "bold", marginTop: "10px" }}>
                Total: R$ {total.toFixed(2)}
            </div>


            <div>

                <h2>Carrinho de Compras</h2>

                <table border="2" cellPading="10">
                    <tr>
                        <th>Foto</th>
                        <th>Produto</th>
                        <th>Categoria</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>

                    <tr>
                        <td>🍔</td>
                        <td>X-Burguer</td>
                        <td>Lanches</td>
                        <td id="qtdBurger">0</td>
                        <td id="precoBurger">R$ 0,00</td>
                        <td>
                            <button onclick="adicionarBurger()">+</button>
                            <button onclick="removerBurger()">-</button>
                        </td>
                    </tr>

                    <tr>
                        <td>🥤</td>
                        <td>Refrigerante</td>
                        <td>Bebidas</td>
                        <td id="qtdRefri">0</td>
                        <td id="precoRefri">R$ 0,00</td>
                        <td>
                            <button onclick="adicionarRefri()">+</button>
                            <button onclick="removerRefri()">-</button>
                        </td>
                    </tr>

                    <tr>
                        <td>🍟</td>
                        <td>Batata Frita</td>
                        <td>Porções</td>
                        <td id="qtdBatata">0</td>
                        <td id="precoBatata">R$ 0,00</td>
                        <td>
                            <button onclick="adicionarBatata()">+</button>
                            <button onclick="removerBatata()">-</button>
                        </td>
                    </tr>
                </table>

                <p>Total de itens: <span id="totalItens">0</span></p>
                <p>Valor Total: <span id="valorTotal">R$ 0,00</span></p>

            </div>
        </section>
    );
}

