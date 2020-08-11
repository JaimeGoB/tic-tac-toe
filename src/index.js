import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const Square = (props) => {

  const [value, setValue] = useState(null);

  return (
    <button
      className="square"
      onClick={() => setValue('X')}
    >
      {value}
    </button>
  );
};

const Board = () => {

  const renderSquare = (i) => {
    return (
      <Square />
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