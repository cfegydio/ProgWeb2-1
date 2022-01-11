document.addEventListener("DOMContentLoaded", criaBotao)
let tamanho = 2;

function criaBotao(){
    div = document.createElement("div");
    div.style.fontSize = `${tamanho}em`;
    div.innerHTML = `<button onclick="aumentaTitulo()"> + </button>
    <button onclick="diminuiTitulo()"> - </button>`;
    document.body.prepend(div)
}

function atualizaTamanho() {
    const h1 = document.querySelector("h1");
    h1.style.fontSize = `${tamanho}em`;
}

function aumentaTitulo() {
    if (tamanho < 4) {
        tamanho += 0.5;
        atualizaTamanho();
    }
}

function diminuiTitulo() {
    if (tamanho > 1) {
        tamanho -= 0.5;
        atualizaTamanho();
    }
}

