//Declaración de objetos y variables
var turn = 1;
var whichTurn;
var arrayBoard = new Array(9);
var cells = document.getElementsByClassName("ticTacToe");



//Declaración de funciones
function winner() {

}

function ticTacToe(event) {
  // alert("¡Funciona!")
  // alert(event.target.id);
  var cell = event.target;
  var idCell = event.target.id;

  var marked = idCell[1];

}

function loadDocument() {
  var count = 0;
  while(count<cells.length) {
    cells[count].addEventListener("click", ticTacToe);
    count++;
    console.log(count,cells[count]);
  }
}



//Asignación de eventos
window.addEventListener("load", loadDocument);





// window.onload = function() {
//   var board = document.querySelector('.board-js');
//
//   board.addEventListener('click', addX);
// };
//
// var centinel = true;
//
// function addX(event) {
//   if (centinel) {
//   event.target.textContent = 'X';
//   centinel = false;
//   } else {
//   event.target.textContent = 'O';
//   centinel = true;
//   }
// }
//

//   function(event) {
//     // event.target.style.backgroundColor='yellow';
//     // event.target.style.border = '1px';
//     event.target.innerHTML = '<h1>X</h1>';
//   });
// };
