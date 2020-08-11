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

  const handleClickEvent = (i) => {
    //Make copy of state square array
    const newSquares = [...squares];
    //Mutate copy setting i-th element to x
    newSquares[i] = 'X';
    //Call setSquares with mutated copy
    setSquares(newSquares);
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClickEvent={() => handleClickEvent(i)}
      />
    );
  };

  return (
    <div style={{
      backgroundColor: 'skyblue',
      margin: 10,
      padding: 20,
    }}>
      Board
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