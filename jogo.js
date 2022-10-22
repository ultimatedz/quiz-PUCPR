const pergunta = document.querySelector('#pergunta');
const resposta = document.querySelectorAll('.btn-resposta');





let rand = Math.floor(Math.random() * 10);


function shuffleArray(arr) {
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
        pergunta: "Qual SO Mobile possuia a maior de mercado em 2012?",
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
    }
]



function mudarPergunta(rand){
    console.log(rand);
    pergunta.innerHTML= question[rand].pergunta;
    mudarRespostas(rand);

}

function mudarRespostas(rand){
    let arrA = [0, 1, 2, 3];
    let k = shuffleArray(arrA);
    console.log(k);
    for (i=0;i<resposta.length;i++){
        resposta[k[i]].innerHTML= question[rand].opcoes[i];
    }
}


resposta[0].onclick = function(){
    verificarResposta(0);
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



function verificarResposta(i){
    console.log(resposta[i].innerHTML)
    console.log(question[rand].resposta)
    for(i=0;i<resposta.length;i++){
        resposta[i].disabled = true;
        resposta[i].style.color = "black";
        if(resposta[i].innerHTML == question[rand].resposta){
            resposta[i].style.backgroundColor = "#bfe3b4";
            console.log("Resposta certa");
        }else{
            resposta[i].style.backgroundColor = "#ff6961";
        }
    }
   
}






document.onload = (mudarPergunta(rand))

