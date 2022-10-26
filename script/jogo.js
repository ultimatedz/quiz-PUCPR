const pergunta = document.querySelector('#pergunta');
const resposta = document.querySelectorAll('.btn-resposta');
const btnNext = document.querySelector('#next');
const ponto = document.querySelector('#score');
const endLink = document.querySelector('#link-end');
const rodada = document.querySelector('#round');
const timer = document.querySelector('#timer');

let errors = 0;
let img = document.createElement("IMG");
let tempor = 0;
let contador = 1;
let temporizador = 15;
let pontuacao =[
    {
    rank: 0,
    nome: "",
    pontos: 0,
    erros: 0,
},

]

let removeImagem = false;



function relogio(){
    temporizador = 15;
    tempor = setInterval(function() {   
        console.log(temporizador);
        timer.innerHTML = "Tempo: " + temporizador --;
        checkTimer(temporizador);
    }, 1000);
    
}


function pararRelogio(){
    clearInterval(tempor);
}


function checkTimer(temporizador){
    if (temporizador == -1){
        endGame();
        pararRelogio();
        timer.innerHTML = "Timeout";
    }
}









let arrPerguntas = [];  // Cria um array de 0 a 10 (Quantas perguntas tem no DB)
for (i=0;i<11;i++){
    arrPerguntas[i] = i;
}

arrPerguntas = shuffleArray(arrPerguntas);  //Embaralha o array




function randomNumber(){    // Gerador de numero aleatorio
    return Math.floor(Math.random() * 10);
}

let rand = randomNumber();   





function shuffleArray(arr) {      // Função de shuffle para as respostas
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}




let question = [
    {
        id : 1,
        pergunta: "Qual das seguintes linguagens de programação é considerada de baixo nível?",
        resposta: "Assembly",
        opcoes: [
            "Python",
            "JavaScript",
            "Assembly",
            "Portugol",
        ],
    },
    {
        id :2,
        pergunta: "O que HTML significa?",
        resposta: "HyperText Markup Language",
        opcoes: [
            "HyperText Language",
            "HyperText Markup Language",
            "Hyper Multiple",
            "HyperText Sheet Language",
        ],
    },
    {
        id: 3,
        pergunta: "O que TDD significa?",
        resposta: "Test Driven Development",
        opcoes:[
            "Test Driven Development",
            "Test Driver Veicular",
            "Test Driven Program",
            "Test Driven code",
        ],
    },
    {
        id: 4,
        pergunta: "O que significa CPU?",
        resposta: "Central Processing Unit",
        opcoes:[
            "Central Processing Unit",
            "Core Processing Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],

    },
    {
        id: 5,
        pergunta: "De acordo com o Sistema Internacional de Unidades (SI), quantos bytes tem um kilobyte de RAM?",
        resposta: "1000",
        opcoes:[
            "1000",
            "1024",
            "512",
            "500",
        ],
    },
    {
        id: 6,
        pergunta: "Java é uma linguagem de programação desenvolvida na decada de 90, sabendo disto, o que significa JVM?",
        resposta: "Java Virtual Machine",
        opcoes:[
            "Java Virtual Machine",
            "Java Vendor Machine",
            "Java Visual Machine",
            "Just Virtual Machine",
        ],
    },
    {
        id: 7,
        pergunta: "Qual linguagem o node.JS utiliza?",
        resposta: "JavaScript",
        opcoes:[
            "Java",
            "Java Source",
            "HTML",
            "JavaScript",
        ],
    },
    {
        id: 8,
        pergunta: "Qual empresa foi fundada em 1976 por Steve Jobs, Steve Wozniak e Ronald Wayne?",
        resposta: "Apple",
        opcoes:[
            "Microsoft",
            "Atari",
            "Apple",
            "Nintendo",
        ]
    },
    {
        id: 9,
        pergunta: "Qual SO Mobile possuia a maior participação de mercado em 2012?",
        resposta: "iOS",
        opcoes:[
            "iOS",
            "Android",
            "BlackBerry",
            "Symbian",
        ]

    },
    {
        id: 0,
        pergunta: "Qual hardware permite que todos os outros hardwares se comuniquem entre si?",
        resposta: "Placa-mãe",
        opcoes:[
            "Placa-mãe",
            "CPU",
            "RAM",
            "HD",
        ]
    },
    {
        id: 10,
        pergunta: "Qual hardware é o da imagem a seguir?",
        resposta: "Memoria RAM",
        opcoes:[
            "Placa-mãe",
            "Fonte",
            "Memoria RAM",
            "Placa de Video",
        ]
    }
]



function mudarPergunta(rand){     // Função que setta a pergunta baseada no numero aleatorio gerado lá em cima
    rodada.innerHTML = "Rodada: " + contador;
    pergunta.innerHTML= question[rand].pergunta; // Define a pergunta baseada no numero rand
    console.log(pergunta.id);
    if(rand == 10){
        
        img.src = "../img/ram.png";
        img.style.width = "200px";
        img.style.height="200px";
        document.querySelector('.boxQuestion').appendChild(img);
        removeImagem=true;
    }
    mudarRespostas(rand);         // Chama função que altera as respostas

}

function mudarRespostas(rand){    // Função responsável por alterar as respostas
    let arrA = [0, 1, 2, 3];      // Array para dar shuffle nas respostas
    let k = shuffleArray(arrA);   // Embaralha o Array
    for (i=0;i<resposta.length;i++){  // Itera sobre as respostas e define uma resposta para os slots
        resposta[k[i]].innerHTML= question[rand].opcoes[i];
    }
}


resposta[0].onclick = function(){   // Verifica o click e chama a função
    verificarResposta(0);           // De verificar resposta
}
resposta[1].onclick = function(){
    verificarResposta(1);
}
resposta[2].onclick = function(){
    verificarResposta(2);
}
resposta[3].onclick = function(){
    verificarResposta(3);
}



function verificarResposta(i){   // Função responsável por verificar as respostas
    contador ++;     // Contador pra contar Rodadas
    console.log(contador);    
    if(resposta[i].innerHTML == question[arrPerguntas[0]].resposta){ // Verifica se acertou a resposta
        pontuacao[0].pontos = pontuacao[0].pontos+10;
        console.log(pontuacao);
        ponto.innerHTML = "Pontos: " + pontuacao[0].pontos;
    }else{
        pontuacao[0].erros = pontuacao[0].erros+1;
    }

    if(contador == 6){
        endGame();
    }

    pararRelogio();


    for(i=0;i<resposta.length;i++){
        resposta[i].disabled = true;    //Desativa os botões quando algum é clicado
        resposta[i].style.color = "black";
        
        if(resposta[i].innerHTML == question[arrPerguntas[0]].resposta){   //Muda cor
            resposta[i].style.backgroundColor = "#bfe3b4";
        }else{
            resposta[i].style.backgroundColor = "#ff6961";
        }
    }
    btnNext.disabled = false;
    btnNext.style.opacity = '1';    //Habilita o botão de next
    
}


function disableResposta (){
    for (i=0;i<resposta.length;i++){
        resposta[i].disabled = true;
        resposta[i].style.color = "black";
        console.log("DesativaFunction");
    }
}







function endGame(){                     //Função responsável por encerrar o game
    btnNext.innerHTML = "Fim";
    btnNext.style.opacity = '1';
    btnNext.disabled = false;
    disableResposta();
    btnNext.onclick = function(){
    endLink.href = "endgame.html"       //Altera o HREF do botão para o proximo html
}
    localStorage.setItem("score", JSON.stringify(pontuacao));   //Salva a pontuação
}











function resetButtons(){    // Reativa os botões após next
    btnNext.style.opacity = '0';
    btnNext.disabled = true;
    for(i=0;i<resposta.length;i++){
        resposta[i].disabled = false;
        resposta[i].style.backgroundColor = "#f4f4f4";
    }
}



btnNext.onclick = function(){   //Função responsável por gerenciar o botão next

    arrPerguntas.shift();       //Retira a pergunta do Array de perguntas.
    resetButtons();             //Reseta os botões
    if (removeImagem == true){
        console.log("Remover imagem");
        removeImagem = false;
        img.style.display = 'none';

    }
    console.log(pontuacao[0].pontos);
    relogio();
    mudarPergunta(arrPerguntas[0])  //Chama as perguntas novamente
}




document.onload = relogio();
document.onload = (mudarPergunta(arrPerguntas[0]));



