function achaTitulo(){
    let titulo = document.querySelector("h1");
    if(titulo == null){
        titulo = document.querySelector("h2");
    }
    if(titulo == null){
        titulo = document.querySelector("h3");
    }
    if(titulo == null){
        titulo = document.querySelector("h4");
    }
    if(titulo == null){
        titulo = document.querySelector("h5");
    }
    if(titulo == null){
        titulo = document.querySelector("h6");
    }
    criaBotao(titulo);
}

let x = 3;
const tamanhos = [10,20,30,40,50,60,70];

function aumentaTamanho(titulo){
    x += 1;
    titulo.style.fontsize += `${tamanho[x]}px`;
}

function diminuiTamanho(titulo){
    x -= 1;
    titulo.style.fontsize += `${tamanho[x]}px`;
}

function criaBotao(titulo){
    titulo.append((document.createTextNode(" ")));
    div = document.createElement("div");
    div.innerHTML = `<button onclick='aumentaTamanho(${titulo})'> + </button> 
    <button onclick='diminuiTamanho(${titulo})'> - </button>`;
    titulo.append(div);
}

achaTitulo();