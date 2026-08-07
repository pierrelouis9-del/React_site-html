let qtdBurger = 0;
let qtdRefri = 0;
let qtdBatata = 0;

const precoBurger = 18;
const precoRefri = 8;
const precoBatata = 10;

function atualizarCarrinho() {
    document.getElementById("qtdBurger").textContent = qtdBurger;
    document.getElementById("qtdRefri").textContent = qtdRefri;
    document.getElementById("qtdBatata").textContent = qtdBatata;

    document.getElementById("precoBurger").textContent =
        "R$ " + (qtdBurger * precoBurger).toFixed(2);

    document.getElementById("precoRefri").textContent =
        "R$ " + (qtdRefri * precoRefri).toFixed(2);

    document.getElementById("precoBatata").textContent =
        "R$ " + (qtdBatata * precoBatata).toFixed(2);

    const totalItens = qtdBurger + qtdRefri + qtdBatata;
    const valorTotal = (qtdBurger * precoBurger) +
                       (qtdRefri * precoRefri) +
                       (qtdBatata * precoBatata);

    document.getElementById("totalItens").textContent = totalItens;
    document.getElementById("valorTotal").textContent =
        "R$ " + valorTotal.toFixed(2);
}

function adicionarBurger() {
    qtdBurger++;
    atualizarCarrinho();
}

function removerBurger() {
    if (qtdBurger > 0) {
        qtdBurger--;
        atualizarCarrinho();
    }
}

function adicionarRefri() {
    qtdRefri++;
    atualizarCarrinho();
}

function removerRefri() {
    if (qtdRefri > 0) {
        qtdRefri--;
        atualizarCarrinho();
    }
}

function adicionarBatata() {
    qtdBatata++;
    atualizarCarrinho();
}

function removerBatata() {
    if (qtdBatata > 0) {
        qtdBatata--;
        atualizarCarrinho();
    }
}

atualizarCarrinho();