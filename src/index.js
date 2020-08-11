import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const Square = (props) => {

  return (
    <button
      className="square"
      onClick={props.onClickEvent}
    >
      {props.value}
    </button>
  );
};

const Board = () => {

  const initialSquares = Array(9).fill(null);
  /*
  const initialSquares = [
    null, null, null,
    null, null, null,
    null, null, null
  ];*/

  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClickEvent = (i) => {
    //Make copy of state square array
    const newSquares = [...squares];

    newSquares[i] = xIsNext ? 'X' : 'O';

    //Call setSquares with mutated copy
    setSquares(newSquares);

    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClickEvent={() => handleClickEvent(i)}
      />
    );
  };

  const status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  return (
    <div style={{
      backgroundColor: 'skyblue',
      margin: 10,
      padding: 20,
    }}>
      {status}
      <div className="board-row">
        {renderSquare(1)} {renderSquare(2)} {renderSquare(3)}
      </div >
      <div className="board-row">
        {renderSquare(4)} {renderSquare(5)} {renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)} {renderSquare(8)} {renderSquare(9)}
      </div>
    </div >
  );
};

const Game = () => {
  return (
    <div className="game">
      Game
      <Board />
    </div>
  );
};

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);