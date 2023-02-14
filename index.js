var mensagem = "Bem vindo ao site do SENAC";

alert(mensagem);


var h1 = document.querySelector("h1")  /* fazer a manipulação do elemento em html*/
h1.innerText = "Cadastra-se para novos cursos"

var botao = document.getElementById("botao");

botao.addEventListener('click', () => {
     var valorDigitado1 = prompt();
     var valorDigitado2 = prompt();
     alert(valorDigitado1 + valorDigitado2);

})

