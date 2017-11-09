//Declaración de objetos y variables
var turn = 1;
var whichTurn;
var arrayBoard = new Array(9);
var cells = document.getElementsByClassName("ticTacToe");



//Declaración de funciones
function winner() {

}

function ticTacToe() {
  alert("Funciona tic tac toe!")
}

function loadDocuent() {
  document.getElementsByClassName("ticTacToe")[4].addEventListener("click", ticTacToe);
}



//Asignación de eventos
window.addEventListener("load", loadDocuent);





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
