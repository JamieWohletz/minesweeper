import React, { Component } from 'react';
import Board from './Board';
import ModeToggle from './ModeButton';
import { generateBoard, revealTile, toggleTileFlag } from '../minesweeper';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const board = generateBoard(10, 10, 5);
    this.state = {
      board,
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
  render() {
    return (
      <div className={`App ${this.state.flagMode ? 'flagMode' : ''}`}>
        <div>
        <Board board={this.state.board} onTileClick={this.onTileClick.bind(this)} />
        <ModeToggle onToggle={this.onFlagButtonClick.bind(this)} flagMode={this.state.flagMode} />
        </div>
      </div>
    );
  }
}

export default App;
