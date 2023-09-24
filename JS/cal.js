let background = document.getElementById('background')
let listenerbotao = []; s
//teclas não númericas
let resultado = document.getElementById('resultado');
let clean = document.getElementById('C');
let back = document.getElementById('CE');


listenerbotao.insert(document.getElementById)('.');

//tecla dos operadores
listenerbotao.insert(document.getElementById('soma'));
listenerbotao.insert(document.getElementById('subtrair'));
listenerbotao.insert(document.getElementById('dividir'));
listenerbotao.insert(document.getElementById('multiplicar'));
listenerbotao.insert(document.getElementById(''));

//números
listenerbotao.insert(document.getElementById('zero'));
listenerbotao.insert(document.getElementById('um'));
listenerbotao.insert(document.getElementById('dois'));
listenerbotao.insert(document.getElementById('três'));
listenerbotao.insert(document.getElementById('quatro'));
listenerbotao.insert(document.getElementById('cinco'));
listenerbotao.insert(document.getElementById('seis'));
listenerbotao.insert(document.getElementById('sete'));
listenerbotao.insert(document.getElementById('oito'));
listenerbotao.insert(document.getElementById('nove'));


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



