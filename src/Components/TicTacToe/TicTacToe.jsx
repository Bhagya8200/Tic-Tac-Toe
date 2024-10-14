import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circleImage from "../../Assets/circle.png";
import crossImage from "../../Assets/cross.png";
import ConfettiExplosion from "react-confetti-explosion";

const TicTacToe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winningCombination, setWinningCombination] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("X's Turn");
  const [isExploding, setIsExploding] = useState(false);
  const titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") return;
    const newData = [...data];

    const currentPlayer = count % 2 === 0 ? "x" : "o";
    newData[num] = currentPlayer;

    setCount(count + 1);
    setData(newData);
    setCurrentMessage(currentPlayer === "x" ? "O's Turn" : "X's Turn"); // Update current message
    checkWin(newData, currentPlayer);
  };

  const checkWin = (newData, currentPlayer) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        newData[a] === newData[b] &&
        newData[b] === newData[c] &&
        newData[a] !== ""
      ) {
        won(newData[a], combination);
        return;
      }
    }

    if (!newData.includes("") && count >= 8) {
      draw(); 
    }
  };

  const won = (winner, combination) => {
    setLock(true);
    setWinningCombination(combination);
    setIsExploding(true);
    if (winner === "x") {
      setCurrentMessage("X Wins!");
      titleRef.current.innerHTML = `Congratulations: <img src=${crossImage} alt='cross'>`;
    } else {
      setCurrentMessage("O Wins!");
      titleRef.current.innerHTML = `Congratulations: <img src=${circleImage} alt='circle'>`;
    }
  };

  const draw = () => {
    setLock(true);
    setCurrentMessage("It's a Draw!");
    titleRef.current.innerHTML = "It's a Draw!";
  };

  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setWinningCombination([]);
    setIsExploding(false);
    setCurrentMessage("X's Turn");
    titleRef.current.innerHTML = "Tic Tac Toe Game In <span>React</span>";
  };

  return (
    <div className="container">
      <div className="board-wrapper">
        <h1 className="title" ref={titleRef}>
          Tic Tac Toe Game In <span>React</span>
        </h1>
        <div className="current-message">{currentMessage}</div>
        <div className="board">
          {data.map((value, index) => (
            <div
              key={index}
              className={`boxes ${
                winningCombination.includes(index)
                  ? data[winningCombination[0]] === "x"
                    ? "highlightYellow"
                    : "highlightBlue"
                  : ""
              }`}
              onClick={(e) => toggle(e, index)}
            >
              {value === "x" && <img src={crossImage} alt="cross" />}
              {value === "o" && <img src={circleImage} alt="circle" />}
            </div>
          ))}
        </div>
        <button className="reset" onClick={reset}>
          Reset
        </button>
        {isExploding && (
          <div className="explosion-container">
            <ConfettiExplosion
              duration={5000}
              particleCount={200}
              onComplete={() => setIsExploding(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
