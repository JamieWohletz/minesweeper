import React from 'react';
import './GameTopBar.css';
import MineCount from './MineCount';

export default (props) => {
  return (
    <div className="GameTopBar">
      <div className="left-div">
        <button
          onClick={props.onMenuClick}
          className="menuButton small button"
        >
          Menu
        </button>
        <button
          onClick={props.onRestartClick}
          className="restartButton small button"
        >
          Restart
        </button>
      </div>
      <div className="center-div">
        <MineCount mineCount={props.mineCount} />
      </div>
      <div className="right-div"></div>
    </div>
  );
}