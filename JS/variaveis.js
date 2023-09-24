
let btnClick = document.getElementById("btn");
let txtNome = document.getElementById("name");
let txtEndereco = document.getElementById("address");
let txtEmail = document.getElementById("email");
let txtMenssagem = document.getElementById("text");
let textRetorno = document.getElementById("teste2");
let x = 0;
btnClick.addEventListener("click", () => {
    textRetorno.innerHTML = "";

    //Nome
    let NomeReal = txtNome.value;
    let countName = NomeReal.length;
    if (NomeReal == "" || countName < 3) {
        let msgErro =
            '<div class="erro">Verifique o nome informado, não pode ser vazio ou conter menos que 3 caracteres.</div>';
        textRetorno.innerHTML = msgErro;


        console.log(NomeReal);
        console.log("Nome inválido.");
        return;
    }
    //console.log(x + ") o texto é: " + NomeReal); ou
    console.log(`${x} O nome é: ${NomeReal}`);
    x++;
    //Endereço
    let EnderecoReal = txtEndereco.value;

    let countAddress = EnderecoReal.length;

    if (EnderecoReal == "" || countAddress < 5) {

        let msgErro =

            '<div class="erro">Verifique o endereço informado, não pode ser vazio ou conter menos que 3 caratres.</div>';



        textRetorno.innerHTML = msgErro;

    }



    console.log(EnderecoReal);

    console.log(countAddress);

    if (countAddress < 3) {

        console.log("Endereço Inválido.");

        return;

    }

    //console.log(x + ") o texto é: " + EnderecoReal); ou
    console.log(`${x} o endereço é: ${EnderecoReal}`);

    x++;
    //Email
    let EmailReal = txtEmail.value;
    let countEmail = EmailReal.length;
    if (EmailReal == "" || countEmail < 9) {
        let msgErro =
            '<div class="erro">Email inválido.</div>';
        textRetorno.innerHTML = msgErro;

    }
    console.log(EmailReal);
    console.log(countEmail);
    if (countEmail < 9) {
        console.log("Email inválido");
        return;

    }
    //console.log(x + ") o texto é:" + EmailReal); ou
    console.log(`${x} o email é: ${EmailReal}`);
    //menssagem
    let MenssagemReal = txtMenssagem.value;
    let countMenssagem = MenssagemReal.length;
    if (MenssagemReal == "" || countMenssagem < 6) {
        let msgErro =
            '<div class="erro"> Esse campo não pode ficar vazio.</div>';
        textRetorno.innerHTML = msgErro;
    }
    console.log(MenssagemReal);
    console.log(countMenssagem);
    if (countMenssagem < 6) {
        console.log("Campo vazio");
        return;

    }
    //console.log(x + ") o texto é:" + MenssagemReal); ou
    const formElememto = document.getElementById("form");

    const formData = new FormData(formElememto);

    let = urlForm = "https://atesco.com.br/lele/";

    enviarForm = fetch(urlForm, {

        method: "POST",

        body: formData,

    });



    console.log(enviarForm);
    console.log(`${x} o texto é: ${MenssagemReal}`);
});


