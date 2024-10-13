// import React, { useRef, useState } from "react";
// import "./TicTacToe.css";
// import circleImage from "../../Assets/circle.png";
// import crossImage from "../../Assets/cross.png";

// const TicTacToe = () => {
//   const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
//   const [count, setCount] = useState(0);
//   const [lock, setLock] = useState(false);
//   const titleRef = useRef(null);

//   const toggle = (e, num) => {
//     if (lock || data[num] !== "") return;
//     const newData = [...data];

//     if (count % 2 === 0) {
//       newData[num] = "x";
//     } else {
//       newData[num] = "o";
//     }

//     setCount(count + 1);
//     setData(newData);
//     checkWin(newData);
//   };

//   const checkWin = (newData) => {
//     const winningCombinations = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (let combination of winningCombinations) {
//       const [a, b, c] = combination;
//       if (newData[a] === newData[b] && newData[b] === newData[c] && newData[a] !== "") {
//         won(newData[a]);
//         return;
//       }
//     }

//     // Check for a draw
//     if (!newData.includes("") && count >= 8) {
//       draw(); // Call draw function if the game is a draw
//     }
//   };

//   const won = (winner) => {
//     setLock(true);
//     if (winner === "x") {
//       titleRef.current.innerHTML = `Congratulations: <img src=${crossImage} alt='cross'>`;
//     } else {
//       titleRef.current.innerHTML = `Congratulations: <img src=${circleImage} alt='circle'>`;
//     }
//   };

//   const draw = () => {
//     setLock(true);
//     titleRef.current.innerHTML = "It's a Draw!";
//   };

//   const reset = () => {
//     setLock(false);
//     setData(["", "", "", "", "", "", "", "", ""]);
//     setCount(0);
//     titleRef.current.innerHTML = "Tic Tac Toe Game In <span>React</span>";
//   };

//   return (
//     <div className="container">
//       <h1 className="title" ref={titleRef}>
//         Tic Tac Toe Game In <span>React</span>
//       </h1>
//       <div className="board">
//         {data.map((value, index) => (
//           <div key={index} className="boxes" onClick={(e) => toggle(e, index)}>
//             {value === "x" && <img src={crossImage} alt="cross" />}
//             {value === "o" && <img src={circleImage} alt="circle" />}
//           </div>
//         ))}
//       </div>
//       <button className="reset" onClick={reset}>
//         Reset
//       </button>
//     </div>
//   );
// };

// export default TicTacToe;









import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circleImage from "../../Assets/circle.png";
import crossImage from "../../Assets/cross.png";

const TicTacToe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") return;
    const newData = [...data];

    if (count % 2 === 0) {
      newData[num] = "x";
    } else {
      newData[num] = "o";
    }

    setCount(count + 1);
    setData(newData);
    checkWin(newData);
  };

  const checkWin = (newData) => {
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
      if (newData[a] === newData[b] && newData[b] === newData[c] && newData[a] !== "") {
        won(newData[a]);
        return;
      }
    }

    // Check for a draw
    if (!newData.includes("") && count >= 8) {
      draw(); // Call draw function if the game is a draw
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src=${crossImage} alt='cross'>`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src=${circleImage} alt='circle'>`;
    }
  };

  const draw = () => {
    setLock(true);
    titleRef.current.innerHTML = "It's a Draw!";
  };

  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    titleRef.current.innerHTML = "Tic Tac Toe Game In <span>React</span>";
  };

  return (
    <div className="container">
      <div className="board-wrapper">
        <h1 className="title" ref={titleRef}>
          Tic Tac Toe Game In <span>React</span>
        </h1>
        <div className="board">
          {data.map((value, index) => (
            <div key={index} className="boxes" onClick={(e) => toggle(e, index)}>
              {value === "x" && <img src={crossImage} alt="cross" />}
              {value === "o" && <img src={circleImage} alt="circle" />}
            </div>
          ))}
        </div>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
