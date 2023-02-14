/* var alunos = ["Pedro Henrique", "Cecilia", "Luiz felipe", "Giovanni", "Arthur", "Vanderlei", "Jaão", "Maria Eduarda", "João 2"];*/

var cursoEnfermagem = {
    nome: "Enfermagem",
    descricao: "Para você que gostaria de ingressar na área da saúde.",
    topicos: ["biosegurança", "Primeiros socorros", "Ministração de medicamentos"],
    imagem: "https://th.bing.com/th/id/R.06833376f5f8056b6f56bec7e97bd09d?rik=nQL1pdIL7tFsQw&riu=http%3a%2f%2fhospitaligesp.com.br%2fwp-content%2fuploads%2f2017%2f11%2fenfermagem-1.jpg&ehk=h1BEQSIkZrv3D2LkK43zAcDL5iyGIS%2b4uXGHiZpUBlY%3d&risl=&pid=ImgRaw&r=0"
}

var cursoProgramacao = {
    nome: "Programação",
    descricao: "Curso para todos que tem interesse em ingressar na área da tecnologia",
    topicos: ["Tecnologia", "Design ui/ux", "Desenvolvedor WEB"],
    imagem: "https://th.bing.com/th/id/OIP.oOhRvvApvyIELsxRthVssgHaEK?pid=ImgDet&rs=1"
}

var cursoAdministracao = {
    nome: "Administração",
    descricao: "Direcionado para quem queira trabalhar no setor administrativo e com finanças",
    topicos: ["Administração", "Markenting", "Finanças e contabilidade"],
    imagem: "https://th.bing.com/th/id/R.560cd404296d59d77888c9b4ad4fa40b?rik=Kc3Z86zCKyFw9Q&pid=ImgRaw&r=0"
}

var cursos = [cursoEnfermagem, cursoProgramacao, cursoAdministracao]



var ul = document.getElementById("cursoslista");

cursos.forEach(curso => {
    var licursos = document.createElement("li");
    var topicosElement = "";

    curso.topicos.forEach(topico => {
        topicosElement = topicosElement + `<li>${topico}</li>`
        console.log(topicosElement)
    })

    licursos.innerHTML = `<img src=${curso.imagem} alt="imagem ${curso.nome}" class="img-programação">
    <div class="cursos-descrição"> 
        <span id="barrinha"> </span>
           <h2>${curso.nome}</h2>
              <p>${curso.descricao}</p>
        <ul class="enfermtxt" id="topicos">
        ${topicosElement}
        </ul>
           <a href="#"> saiba mais </a>
    </div>`


    licursos.classList = "cursos-item"
    ul.appendChild(licursos);
})




















/*var personagens = ["Sheldon", "Raj", "Penny", "Leonard", "Howard"]


var serieBigBang = {
    nome: "The big bang theory",
    temporadas: 12,
    episodios: 279,
    produtora: "Warner bros",
    estreia: 2007,
    final: 2019,
    personagens: ["Sheldon", "Raj", "Penny", "Leonard", "Howard"],
    sinopse: "Leonard e Sheldon são dois físicos brilhantes que trabalham no Instituto de Tecnologia da Califórnia e dividem um apartamento em Pasadena. Leonard vem de uma família cheia de prodígios e tem de lidar com a expectativa opressora de seus parentes. Por outro lado, Sheldon frequentou faculdade desde cedo, é o garoto de ouro do Texas com dois doutorados, mestrados e, mesmo assim, tem pouquíssimo traquejo social para se relacionar com outros seres humanos. Leonard e Sheldon passam a maior parte do tempo com os amigos Howard e Raj, dois cientistas que também amam cinema, quadrinhos e videogames. A dinâmica do quarteto muda quando Penny, uma jovem atraente e aspirante a atriz, se muda para o apartamento da frente, encantando Leonard logo de cara. Apesar de ser muito diferente dos rapazes, aos poucos Penny se aproxima dos Geeks",


}



var nome = "Giovanni";
var dia = "31/01/23";

var frase = nome + " faltou do curso de " + cursoProgramacao.nome + " dia " + dia





var idade = 18;



if (idade >= 18) {
    console.log("maior de idade");
}

else {
    console.log("menor de idade");
}





var nota = 60;


if (nota >= 60) {
    console.log("Aprovado");
}

else {
    console.log("Reprovado");
}






var peso = 75;
var altura = 1.80;

var imc = peso/(altura * altura);


if (imc <18.5) {
    console.log("MAGREZA");
}


else if (imc <=24.9) 
    console.log("NORMAL");


else if (imc <=29.9) 
    console.log("SOBREPESO");


else if  (imc <=39.9) 
    console.log("OBESIDADE");


else if (imc >40) 
    console.log("OBESIDADE GRAVE");




console.log(imc)
*/



/*const alunos = ["Pedro Henrique", "Cecilia", "Luiz felipe", "Giovanni", "Arthur", "Vanderlei", "Jaão", "Maria Eduarda", "João 2"]

alunos.forEach(Element => console.log(Element));*/


/*
var cursos = [cursoEnfermagem, cursoProgramacao, cursoAdministracao]

cursos.forEach(curso => console.log(curso.nome + ": " + curso.topicos));


console.log(cursos)
*/


/*
var titulo = document.getElementById("titulo");
titulo.style.backgroundColor = "green";
titulo.style.color = "black";

var saibamais = document.getElementById("saibamais");
saibamais.style.backgroundColor = "green";

var barrinha = document.getElementById("barrinha");
barrinha.style.backgroundColor = "red";


var h1programa = document.getElementById("h1programa");
h1programa.innerHTML = "<h1> PROGRAMAÇÃO </h1>";


var footer = document.getElementById("footer");
footer.innerHTML = "<h1> Todos os direitos reservados © 2023 </h1>";
*/



/*
var sobrenos = document.getElementById("sobrenos");

var libotao = document.createElement("li");

libotao.innerHTML = `<a href="#">Sobre nós</a>`

sobrenos.appendChild(libotao)




var topicos = document.getElementById("topicos");

var litopico = document.createElement("li");

litopico.innerText = "front-end"

topicos.appendChild(litopico)




var topicosadm = document.getElementById("topicosadm");

var litopicosadm = document.createElement("li");

litopicosadm.innerText = "Pacote office"

topicosadm.appendChild(litopicosadm)



var topicosenf = document.getElementById("topicosenf");

var litopicosenf = document.createElement("li");

litopicosenf.innerText = "Aferir pressão"

topicosenf.appendChild(litopicosenf)

*/


/*
var ul = document.getElementById("cursoslista");

var liCursoSeguranca = document.createElement("li");
liCursoSeguranca.innerHTML = `<img src="/imagens/segurancatrab.jpg" alt="imagem segurança" class="img-programação">
<div class="cursos-descrição"> 
    <span > </span>
       <h2 id="h1programa"> Segurança do trabalho </h2>
          <p> A segurança do trabalho atua em todas as esferas da sociedade onde há trabalhadores.          
          </p>
    <ul class="enfermtxt">
        <li class="txt-box"> Segurança Elétrica </li>
        <li class="txt-box"> Uso de APIS </li>
        <li class="txt-box"> Primeiros socorros </li>
        <li class="txt-box"> Psicologia do trabalho </li> 
    </ul>
       <a  href="#"> saiba mais </a>
</div>`

liCursoSeguranca.classList = "cursos-item"




ul.appendChild(liCursoSeguranca)





var ul = document.getElementById("cursoslista");

var liCursoAgro = document.createElement("li");
liCursoAgro.innerHTML = `<img src="https://guiadecastanhal.com.br/blog/wp-content/uploads/2019/03/ifpa-agropecuaria.jpg" alt="imagem agropecuaria" class="img-programação">
<div class="cursos-descrição"> 
    <span > </span>
       <h2 id="h1programa"> Agropecuária </h2>
          <p> administrar propriedades rurais e fiscalizar produtos de origem vegetal, animal e agroindustrial          
          </p>
    <ul class="enfermtxt">
        <li class="txt-box"> agropecuária brasileira </li>
        <li class="txt-box"> Topografia </li>
        <li class="txt-box"> manejo de animais </li>
        <li class="txt-box"> Nutrição animal </li> 
    </ul>
       <a  href="#"> saiba mais </a>
</div>`

liCursoAgro.classList = "cursos-item"




ul.appendChild(liCursoAgro)
*/