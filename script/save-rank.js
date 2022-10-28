const inputName = document.createElement('input');
const saveButton = document.createElement('button');
const inputNome = document.querySelector('.inputNome');
const btnSalvar = document.querySelector('.btn-salvar');
const pontuacaoTotal = document.querySelector('#pontuacaoFinal');

let dadosLocalStore = localStorage.getItem("dados");
let dados = JSON.parse(dadosLocalStore);

let StringLocalStore = localStorage.getItem("score");
let resultadosAnteriores = JSON.parse(StringLocalStore);


let userData = [];

console.log(userData);




//sessionStorage.getItem("score")






function seuNome(){
    inputName.type = 'text';
    inputName.id = 'nome';
    inputName.className = 'inputName';
    inputName.required = true;
    inputNome.appendChild(inputName);
}



function salvar(){
    saveButton.innerHTML = 'Salvar';
    btnSalvar.appendChild(saveButton);
    const childBtn = btnSalvar.firstElementChild;
    childBtn.id = "btn-save";
	saveButton.addEventListener('click', salvarNome);
}

/*
function salvarNome(){
    scoreObj[0].nome = document.getElementById('nome').value;
    localStorage.setItem("score", JSON.stringify(scoreObj));
}
*/


function salvarNome(){
    let nomeTemp = document.getElementById('nome').value;
    let pontosTemp = resultadosAnteriores[0].pontos;
    let erros = resultadosAnteriores[0].erros;

    if (dados){
        userData = [...dados, {
            Rank: 0,
            Nome: nomeTemp,
            Pontos: pontosTemp,
            Acertos: pontosTemp/10,
            Erros: erros,
            
        }]
    }else{
        userData = [{
            Rank: 0,
            Nome: nomeTemp,
            Pontos: pontosTemp,
            Acertos: pontosTemp/10,
            Erros: erros,

            
        }]
    }
    console.log(userData);
    localStorage.setItem("dados", JSON.stringify(userData))
}




document.onload = seuNome();
document.onload = salvar();
document.onload = console.log(userData)
