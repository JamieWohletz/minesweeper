import React from 'react';
import './Tile.css';

export default ({ tile, onClick }) => {
  const ch = tile.revealed ? tile.character : '';
  const flag = tile.flagged ? (<span className="flag">⚑</span>) : '';
  const color = (isNaN(ch) || ch === 1) ? 'inherit' : `rgb(255, ${255 - ch * 80}, 0)`;
  return (
    <div
      className={`${tile.revealed ? 'revealed' : ''} Tile character-${ch}`}
      onClick={onClick}>
      {flag} <span style={{color}}>{ch}</span>
    </div>
  );
}