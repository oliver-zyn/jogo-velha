document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      if (playerTime == 0) {
        alert("O Jogo Acabou - O Vencedor foi o jogador O");
      } else if (playerTime == 1) {
        alert("O Jogo Acabou - O Vencedor foi o jogador X");
      }
    }, 10);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];

  if (symbol != "") {
    square.innerHTML = `<div class=${symbol}><div>`;
  }
}

function updateResetSquares() {
  let o = document.querySelectorAll(".o");
  let x = document.querySelectorAll(".x");

  o.forEach((o) => {
    o.classList.remove("o");
  });

  x.forEach((x) => {
    x.classList.remove("x");
  });
}
