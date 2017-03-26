import React from 'react';
import './MineCount.css';

export default ({mineCount}) => {
  return (
    <div className="MineCount">
      💣 <span className="count">x{mineCount}</span>
    </div>
  )
}