import React from "react";
import Square from "./Square"

const Board = ({ squares, onCLick }) => (
  <div className="board">
    {squares.map((square, index) => (
      <Square key={index} value={square} onClick={() => onCLick(index)} />
    ))}
  </div>
);

export default Board;