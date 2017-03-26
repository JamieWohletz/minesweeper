import React from 'react';
import './Tile.css';

export default ({tile, onClick}) => {
  const character = tile.revealed ? tile.character : '';
  const flag = tile.flagged ? (<span className="flag">⚑</span>) : '';
  return (
    <div className={`${tile.revealed ? 'revealed' : ''} Tile`} onClick={onClick}>
      {flag} {character}
    </div>
  );
}