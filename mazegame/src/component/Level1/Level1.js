import React from "react";

const url = window.location.href;


if (url === "http://localhost:3000/Level1") {
 
  let level1 = [
    [1, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 0, 0, 1]
  ];
  let mazearray = level1;

  function getratposition() {
    let position = [0, 0];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
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

    console.log("result", ratposition[0], ratposition[1] + 1 === 1);
    if (
      e.key === "ArrowRight" &&
      ratleft < (mazearray.length - 1) * 50 &&
      mazearray[ratposition[0]][ratposition[1] + 1] === 1
    ) {
      ratleft += 50;
      rat.style.left = ratleft + "px";
      mazearray[ratposition[0]][ratposition[1]] = 1;
      mazearray[ratposition[0]][ratposition[1] + 1] = 2;
    }

    if (
      e.key === "ArrowLeft" &&
      ratleft > 0 &&
      mazearray[ratposition[0]][ratposition[1] - 1] === 1
    ) {
      ratleft -= 50;
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
      rattop < (mazearray.length - 1) * 50 &&
      mazearray[ratposition[0] + 1][ratposition[1]] === 1
    ) {
      rattop += 50;
      rat.style.top = rattop + "px";

      mazearray[ratposition[0]][ratposition[1]] = 1;
      mazearray[ratposition[0] + 1][ratposition[1]] = 2;
    }

    if (ratleft === foodleft && rattop === foodtop) {
      alert("You Won!");
      window.location.replace("/Level2");
    }
  });
}

function Level1() {
  return (
    <div className="body">
      <div className="rules">
        <h1>Level 1: The Easy Round </h1>

        <div id="maze-container">
          <img
            src="./src/hat.png"
            id="rat"
            style={{}}
            width="50px"
            height="50px"
            alt="hat"
          ></img>
          <img
            src="./src/chest.png"
            alt="chest"
            width="50px"
            height="50px"
            id="food"
          ></img>

          <div className="row">
            <div className="cell" data-value={1}></div>
            <div className="cell wall" data-value={2}></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="row">
            <div className="cell" data-value={1}></div>
            <div className="cell"></div>
            <div className="cell wall"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
          </div>
          <div className="row">
            <div className="cell wall"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell wall"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="row">
            <div className="cell wall"></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
            <div className="cell"></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
          </div>
          <div className="row">
            <div className="cell wall"></div>
            <div className="cell wall"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
          </div>
          <div className="row">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
          </div>
          <div className="row">
            <div className="cell"></div>
            <div className="cell wall"></div>
            <div className="cell"></div>
            <div className="cell wall"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="row">
            <div className="cell wall"></div>
            <div className="cell wall"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell wall"></div>
            <div className="cell wall"></div>
            <div className="cell"></div>
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

export default Level1;
