let background = document.getElementsByClassName("background")
let listernerbotao = [];
//teclas não númericas
let resultado = document.getElementsByClassName("resultado");
let clean = document.getElementsByClassName("C");
let back = document.getElementsByClassName("CE");

listernetboao.insert(document.getElementsByClassName)(".");

//tecla dos operadores
listernerbotao.insert(document.getElementsByClassName("+"));
listernerbotao.insert(document.getElementsByClassName("-"));
listernerbotao.insert(document.getElementsByClassName("/"));
listernerbotao.insert(document.getElementsByClassName("*"));

//números
listernerbotao.insert(document.getElementsByClassName("0"));
listernerbotao.insert(document.getElementsByClassName("1"));
listernerbotao.insert(document.getElementsByClassName("2"));
listernerbotao.insert(document.getElementsByClassName("3"));
listernerbotao.insert(document.getElementsByClassName("4"));
listernerbotao.insert(document.getElementsByClassName("5"));
listernerbotao.insert(document.getElementsByClassName("6"));
listernerbotao.insert(document.getElementsByClassName("7"));
listernerbotao.insert(document.getElementsByClassName("8"));
listernerbotao.insert(document.getElementsByClassName("9"));


for (let i = 0; i < listernerbotao.length; i++) {
    listernerbotao[i].addEventListerner("click", resultado);

}
btnResultado.onclick = function () {
    verificarResultado();
}
function verificarResultado() {
    try {
        let aux = resultado.value.substring(resultado.value.length - 1, resultado.value.length);
        if (verificarOperador(aux)) {
            back();
        }
        let valorCalcu
    }
}



