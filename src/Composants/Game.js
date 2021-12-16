import React, { useState } from "react";
import { Button, Container, Divider, Message } from "semantic-ui-react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  return (
    < >
      <h2 style={{ textAlign: "center", color: "antiquewhite" }}>  Tic Tac Toc </h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Board squares={history[stepNumber]} onClick={handleClick} />
      </div><br />

      <div className="info-wrapper">
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        {winner ? <Message color="orange">GAGNANT : {winner} !!!</Message> : " Joueur : " + xO}
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <Button size="tiny" color="orange" onClick={() => jumpTo(0)}>Initialiser</Button>
      </div>
    </>
  );
};

export default Game;
