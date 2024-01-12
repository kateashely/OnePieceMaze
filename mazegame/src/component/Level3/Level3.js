import React from "react";

const url = window.location.href;

if (url === "http://localhost:3000/Level3") {
  let level3 = [
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0,],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1,0, 1, 0, 1, 0, 1, 0, ],
    [1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,1, 1, 1, 1, 1, 1, 1,],
    [0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0,],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0,],
    [0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0,],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0,],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,1, 1, 0, 0, 0, 0, 0,],
    [ 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1,0, 1, 1, 1, 1, 1, 1,],
    [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0,],
    [ 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0,],
    [ 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0,],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0,],
    [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0,],
    [ 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0,],
    [0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0,],
    [0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0],
    [1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0],
    [0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1],
    [0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0],
    [0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1],
    [1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1],
    [1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0],
    [0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0],
    [1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0],
    [0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0],
    [0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0],
    [0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0],
    [0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1],
    [0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1],
    [1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1],
  ];

  let mazearray = level3;

  function getratposition() {
    let position = [0, 0];
    for (let i = 0; i < 32; i++) {
      for (let j = 0; j < 32; j++) {
        if (mazearray[i][j] === 2) {
          position[0] = i;
          position[1] = j;
        }
      }
    }
    return position;
  }

  document.addEventListener("keydown", function (e) {
    let rat = document.getElementById("rat");
    let food = document.getElementById("food");

    let ratleft = rat.offsetLeft;
    let rattop = rat.offsetTop;
    let foodleft = food.offsetLeft;
    let foodtop = food.offsetTop;
    let ratposition = getratposition();

    if (
      e.key === "ArrowRight" &&
      ratleft < (mazearray.length - 1) * 100 &&
      mazearray[ratposition[0]][ratposition[1] + 1] === 1
    ) {
      ratleft += 100;
      rat.style.left = ratleft + "px";
      mazearray[ratposition[0]][ratposition[1]] = 1;
      mazearray[ratposition[0]][ratposition[1] + 1] = 2;
    }

    if (
      e.key === "ArrowLeft" &&
      ratleft > 0 &&
      mazearray[ratposition[0]][ratposition[1] - 1] === 1
    ) {
      ratleft -= 100;
      rat.style.left = ratleft + "px";
      mazearray[ratposition[0]][ratposition[1]] = 1;
      mazearray[ratposition[0]][ratposition[1] - 1] = 2;
    }

    if (
      e.key === "ArrowUp" &&
      rattop > 0 &&
      mazearray[ratposition[0] - 1][ratposition[1]] === 1
    ) {
      rattop -= 50;
      rat.style.top = rattop + "px";
      mazearray[ratposition[0]][ratposition[1]] = 1;
      mazearray[ratposition[0] - 1][ratposition[1]] = 2;
    }

    if (
      e.key === "ArrowDown" &&
      rattop < (mazearray.length - 1) * 100 &&
      mazearray[ratposition[0] + 1][ratposition[1]] === 1
    ) {
      rattop += 100;
      rat.style.top = rattop + "px";

      mazearray[ratposition[0]][ratposition[1]] = 1;
      mazearray[ratposition[0] + 1][ratposition[1]] = 2;
    }

    if (ratleft === foodleft && rattop === foodtop) {
      alert("Congrats! You've found the one piece!");
    }
  });
}
function Level3() {
  return (
    <div className="body">
      <div className="rules">
        <h1>Level 3: The Difficult Round </h1>

        <div id="maze-container">
          <img
            src="hat.png"
            id="rat"
            width="50px"
            height="50px"
            alt="hat"
          ></img>
          <img
            src="chest.png"
            alt="chest"
            width="50px"
            height="50px"
            id="food"
          ></img>
          <div class="row">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
          </div>
          <div class="row">
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
          </div>
          <div class="row">
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
          </div>
          <div class="row">
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell wall"></div>
          </div>
        </div>
        </div>

        <div className="back-btn">
          <a href="/" className="button2">
            Back to Main Page
          </a>

      </div>
    </div>
  );
}

export default Level3;
