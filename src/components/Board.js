import React from 'react';
import Tile from './Tile';
import './Board.css';

export default (props) => {
  return (
    <table className="Board">
      <tbody>
      {props.board.map((row, i) => {
        return (
          <tr key={i}>
            {row.map((tile, j) => {
              return (
                <td key={j}>
                  <Tile tile={tile} onClick={() => props.onTileClick(i, j)} />
                </td>
              );
            })}
          </tr>
        )
      })}
      </tbody>
    </table>
  );
};