const pontuacaoTotal = document.querySelector('#pontuacaoFinal');

let StringLocalStore = localStorage.getItem("score");
let scoreObj = JSON.parse(StringLocalStore);

console.log(scoreObj);

pontuacaoTotal.innerHTML= scoreObj[0].pontos;

