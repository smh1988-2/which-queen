import React, { useEffect, useState } from "react";
import Queens from "./Queens";
import "./App.css";

function App() {
  const BASE_URL = "http://localhost:9292/queens";
  const [queens, setQueens] = useState([]);
  const [randomQueen, setRandomQueen] = useState();
  const [wrongQueen, setWrongQueen] = useState();
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setQueens(data));
  }, []);

  function returnRandomQueen() {
    
    fetch("http://localhost:9292/random-queen")
    .then(r => r.json())
    .then(data => setWrongQueen(data))

    setGameStarted(true); 
    fetch("http://localhost:9292/random-queen")
    .then(r => r.json())
    .then(data =>setRandomQueen(data))
  }
  

  return (
    <div className="App">
      {gameStarted ? <><button onClick={returnRandomQueen}>Next Question</button></> : <><button onClick={returnRandomQueen}>Play Game</button></>}
      
      <p>Score: {score}</p>
      
          <Queens
            randomQueen={randomQueen}
            queens={queens}
            wrongQueen={wrongQueen}
            score={score}
            setScore={setScore}
            returnRandomQueen={returnRandomQueen}
          />
    </div>
  );
}

export default App;
