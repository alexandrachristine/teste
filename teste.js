function inserir(valor) {
    let resultado = document.getElementById("resultado");
    resultado.value += valor;
}

function limpar() {
    let resultado = document.getElementById("resultado");
    resultado.value = "";
}

function limparEntrada() {
    let resultado = document.getElementById("resultado");
    resultado.value = resultado.value.slice(0, -1);
}

function calcular() {
    let resultado = document.getElementById("resultado");
    try {
        let aux = resultado.value.substring(resultado.value.length - 1, resultado.value.length);
        if (verificarOperador(aux)) {
            limparEntrada();
        }
        let valorCalculado = eval(resultado.value);
        if (valorCalculado || valorCalculado === 0) {
            resultado.value = valorCalculado;
        } else {
            throw "Erro";
        }
    } catch (e) {
        console.error(e);
    }
}

function verificarOperador(valor) {
    switch (valor) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
