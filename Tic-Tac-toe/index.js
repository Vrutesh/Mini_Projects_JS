let boxes = document.querySelectorAll(".box");
let result = document.getElementsByClassName("message")[0];
let restart_btn = document.getElementsByClassName("restart-btn")[0];
let new_Game = document.getElementsByClassName("new-game")[0];

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let player_0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Click");
    if (player_0) {
      box.innerText = "X";
      player_0 = false;
    } else {
      box.innerText = "O";
      player_0 = true;
    }
    box.style.pointerEvents = "none";
    checkWinner();
  });
});

//restart functionality
restart_btn.addEventListener("click", () => {
  const confirmRestart = confirm("Are you sure you want to restart the game ?");
  if (confirmRestart) {
    boxes.forEach((box) => {
      box.innerText = "";
      box.style.pointerEvents = "auto";
      player_0 = true;
      // box.removeEventListener("click", boxes)
    });
  }
});

//new Game functionality
new_Game.addEventListener("click", () => {
  const confirmRestart = confirm("Do you want to start new game ?");
  if (confirmRestart) {
    boxes.forEach((box) => {
      box.innerHTML = "";
      enablebox();
    });
  }
});

const disable_box = () => {
  for (const box of boxes) {
    box.style.pointerEvents = "none";
  }
};

const enablebox = () => {
  for (const box of boxes) {
    result.innerText = "";
    new_Game.style = "display:none";
    restart_btn.style = "display:inline-block";
    box.style.pointerEvents = "auto";
    player_0 = true;
  }
};

//winner message
const showWinner = (winner) => {
  result.innerText = `Congratulations, Your winner is ${winner}`;
  new_Game.style = "display :inline-block";
  restart_btn.style = "display:none";
  disable_box();
};

//check winner
const checkWinner = () => {
  for (const pattern of winPattern) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;
    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value === pos2Value && pos1Value === pos3Value) {
        showWinner(pos1Value);
      }
    }
  }
};
s