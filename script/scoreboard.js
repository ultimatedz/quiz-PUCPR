let StringLocalStore = localStorage.getItem("dados");
let scoreObj = JSON.parse(StringLocalStore);
const container = document.querySelector('.ranks');
const jogador = document.querySelector('.player');
const tabela = document.querySelector("table");



let contador = 0;

function comparar(a,b){
  console.log("Entrou");
  if (a.Pontos > b.Pontos){
    return -1;
  }
  if (a.Pontos < b.Pontos){
    return 1;
  }
  return 0;

}

scoreObj.sort(comparar);
addIndex(scoreObj);
console.log(scoreObj);

function addIndex(scoreObj){
    for(i=0;i<scoreObj.length;i++){  
        scoreObj[i].Rank = i+1;
    }
}






function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        if(key == "Acertos"){
          th.classList.add("acertos");
        }
        if(key == "Erros"){
          th.classList.add("erros");
        }
        th.appendChild(text);
        row.appendChild(th);
    }
  }


  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow(); 

      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        if(key == "Acertos"){
          cell.classList.add("acertos");
        }
        if(key =="Erros"){
          cell.classList.add("erros");
        }
        cell.appendChild(text);
      }
    }
  }





let data = Object.keys(scoreObj[0]);
generateTable(tabela, scoreObj)
generateTableHead(tabela, data);






//jogador.innerHTML = JSON.stringify(scoreObj);





