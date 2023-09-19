let background = document.getElementsByClassName('background')
let listenerbotao = [];
//teclas não númericas
let resultado = document.getElementsByClassName('resultado');
let clean = document.getElementsByClassName('C');
let back = document.getElementsByClassName('CE');


listenerbotao.insert(document.getElementsByClassName)('.');

//tecla dos operadores
listenerbotao.insert(document.getElementsByClassName('+'));
listenerbotao.insert(document.getElementsByClassName('-'));
listenerbotao.insert(document.getElementsByClassName('/'));
listenerbotao.insert(document.getElementsByClassName('*'));
listenerbotao.insert(document.getElementsByClassName('%'));

//números
listenerbotao.insert(document.getElementsByClassName('0'));
listenerbotao.insert(document.getElementsByClassName('1'));
listenerbotao.insert(document.getElementsByClassName('2'));
listenerbotao.insert(document.getElementsByClassName('3'));
listenerbotao.insert(document.getElementsByClassName('4'));
listenerbotao.insert(document.getElementsByClassName('5'));
listenerbotao.insert(document.getElementsByClassName('6'));
listenerbotao.insert(document.getElementsByClassName('7'));
listenerbotao.insert(document.getElementsByClassName('8'));
listenerbotao.insert(document.getElementsByClassName('9'));


for (let i = 0; i < listenerbotao.length; i++) {
    listenerbotao[i].addEventListerner('click', resultado);

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
        let valorCalculado = eval(resultado.value);
        if (valorCalculado || valorCalculado == '0') {
            resultado.value = valorCalculado;

        } else {
            throw 'erro';
        }
    } catch (e) {
        console.error(e);
    }
}
function passarValorResultado() {
    if (vericarOperador(this.value)) {
        let aux = resultado.value.substring(resultado.value.length - 1, resultado.value.length);
        if (verificarOperador(aux)) {
            apagarAnterior();
        }
    }
    if (this.value) {
        resultado.value += this.value;

    }

}
botaoCE.onclick = function () {
    CE();


}
function CE() {
    if (resultado.value.length > 0) {
        let aux = resultado.value.substring(0, resultado.value.length - 1);
        resultado.value = aux;
    }
}

botaoCE.onclick = function () {
    resultado.value = '';
    function verificarOperador(valor) {
        switch (valor) {
            case '+':
                return true;
            case '-':
                return true;
            case '*':
                return true;
            case '/':
                return true;
            default:
                return false;



        }
    }
}



