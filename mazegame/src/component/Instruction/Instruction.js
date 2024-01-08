import React from "react";

function Instruction() {
  return (
    <div className="body">
      <div className="rules">
        <h1 class="info">Instructions of the Game</h1>
        <div className="rule-content">
          <b>Controls:</b>
          <p>For PC/Laptop, use arrow keys.</p>
          <b>How to play the game:</b>
          <p>1. Click "Start Game" to proceed to the game.</p>
          <p>2. There are 3 levels in the maze.</p>
          <p>3. You will start with level 1 or the easy round by default.</p>
          <p>
            4. You will use the Straw Hat Pirates logo as your character and
            treasure chest as your end goal.
          </p>
          <p>
            5. To proceed to the next level, your character must find its way to
            the treasure chest.
          </p>
          <p>
            6. When you're done with the last round, you've completed the
            mission.
          </p>
          <p>7. Click "Start Again" to play again.</p>
        </div>
      </div>
      <div className="back-btn">
        <a href="/" class="button2">
          Back to Main Page
        </a>
      </div>
    </div>
  );
}

export default Instruction;
