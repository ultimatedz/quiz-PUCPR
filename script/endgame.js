const pontuacaoTotal = document.querySelector('#pontuacaoFinal');
const soundWin = document.querySelector('#audio');

let StringLocalStore = localStorage.getItem("score");
let scoreObj = JSON.parse(StringLocalStore);

console.log(scoreObj);

pontuacaoTotal.innerHTML= scoreObj[0].pontos;

if (scoreObj[0].pontos == 50){      //Verifica para incluir Audio
    var x = document.createElement("audio");
    x.setAttribute("src", "../files/congrats.mp3" )
    x.setAttribute("controls", "controls");
    x.volume = 0.1;
    soundWin.appendChild(x);


    //const audio = new Audio('../files/congrats.mp3')
    //audio.play();
    
}

