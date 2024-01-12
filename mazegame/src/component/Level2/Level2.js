import React from "react";

const url = window.location.href;

if (url === "http://localhost:3000/Level2") {
  let level2 = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0],   
        [0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0], 
        [0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1]
  ];

  let mazearray = level2;

  function getratposition1() {
    let position = [0, 0];
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
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
    let ratposition = getratposition1();

    if (
      e.key === "ArrowRight" &&
      ratleft < (mazearray.length - 1) * 25 &&
      mazearray[ratposition[0]][ratposition[1] + 1] === 1
    ) {
      ratleft += 25;
      rat.style.left = ratleft + "px";
      mazearray[ratposition[0]][ratposition[1]] = 1;
      mazearray[ratposition[0]][ratposition[1] + 1] = 2;
    }

    if (
      e.key === "ArrowLeft" &&
      ratleft > 0 &&
      mazearray[ratposition[0]][ratposition[1] - 1] === 1
    ) {
      ratleft -= 25;
      rat.style.left = ratleft + "px";
      mazearray[ratposition[0]][ratposition[1]] = 1;
      mazearray[ratposition[0]][ratposition[1] - 1] = 2;
    }

    if (
      e.key === "ArrowUp" &&
      rattop > 0 &&
      mazearray[ratposition[0] - 1][ratposition[1]] === 1
    ) {
      rattop -= 25;
      rat.style.top = rattop + "px";
      mazearray[ratposition[0]][ratposition[1]] = 1;
      mazearray[ratposition[0] - 1][ratposition[1]] = 2;
    }

    if (
      e.key === "ArrowDown" &&
      rattop < (mazearray.length - 1) * 25 &&
      mazearray[ratposition[0] + 1][ratposition[1]] === 1
    ) {
      rattop += 25;
      rat.style.top = rattop + "px";

      mazearray[ratposition[0]][ratposition[1]] = 1;
      mazearray[ratposition[0] + 1][ratposition[1]] = 2;
    }

    if (ratleft === foodleft && rattop === foodtop) {
      alert("You Won!");
      window.location.replace("/Level3");
    }
  });
}

function Level2() {
  return (
    <div className="body">
      <div className="rules">
        <h1>Level 2: The Not-So-Easy Round </h1>

        <div id="maze-container">
          <img
            src="./hat.png"
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
          <div className="row">
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
          </div>
          <div className="row">
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
          </div>
          <div className="row">
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
          </div>
          <div className="row">
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
          </div>
          <div className="row">
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
          </div>
          <div className="row">
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
          </div>
          <div className="row">
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
          </div>
          <div className="row">
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
          </div>
          <div className="row">
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
          </div>
          <div className="row">
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
          </div>
          <div className="row">
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
          </div>
          <div className="row">
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
          </div>
          <div className="row">
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
          </div>
          <div className="row">
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
          </div>
          <div className="row">
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
          </div>
          <div className="row">
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
            <div className="cell1 wall1"></div>
            <div className="cell1"></div>
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

export default Level2;
