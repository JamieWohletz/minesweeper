import React, { Component } from 'react';
import './Game.css';
import GameTopBar from './GameTopBar';
import MineCount from './MineCount';
import Board from './Board';
import FlagButton from './FlagButton';
import { generateBoard, revealTile, toggleTileFlag } from '../minesweeper';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      board: generateBoard(this.props.columns, this.props.rows, this.props.mineCount),
      flagMode: false
    };
  }
  onTileClick(i, j) {
    if (this.state.flagMode) {
      toggleTileFlag(i, j, this.state.board);
    } else {
      revealTile(i, j, this.state.board);
    }
    this.setState({
      board: this.state.board
    });
  }
  onFlagButtonClick() {
    this.setState({
      board: this.state.board,
      flagMode: !this.state.flagMode
    });
  }
  newGame() {
    this.setState(this.getInitialState());
  }
  render() {
    return (
      <div className={`Game ${this.state.flagMode ? 'flagMode' : ''}`}>
        <GameTopBar mineCount={this.props.mineCount} onMenuClick={this.props.showMenu} onRestartClick={this.newGame.bind(this)} />
        <div className="wrapper">
          <Board board={this.state.board} onTileClick={this.onTileClick.bind(this)} />
          <FlagButton onToggle={this.onFlagButtonClick.bind(this)} flagMode={this.state.flagMode} />
        </div>
      </div>
    );
  }
}