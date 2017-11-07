window.onload = function() {
  var board = document.querySelector('.board-js');

  board.addEventListener('click', addX);
};

var centinel = true;

function addX(event) {
  if (centinel) {
  event.target.textContent = 'X';
  centinel = false;
  } else {
  event.target.textContent = 'O';
  centinel = true;
  }
}





//   function(event) {
//     // event.target.style.backgroundColor='yellow';
//     // event.target.style.border = '1px';
//     event.target.innerHTML = '<h1>X</h1>';
//   });
// };
