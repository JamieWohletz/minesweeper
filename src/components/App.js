import React, { Component } from 'react';
import Menu from './Menu';
import Game from './Game';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      gameStarted: false,
      gameData: {
        rows: 0,
        columns: 0,
        mineCount: 0
      }
    };
  }
  menu() {
    this.setState(this.getInitialState());
  }
  startEasyGame() {
    this.setState({
      gameStarted: true,
      gameData: {
        rows: 10,
        columns: 10,
        mineCount: 10
      }
    });
  }
  startMediumGame() {
    this.setState({
      gameStarted: true,
      gameData: {
        rows: 15,
        columns: 15,
        mineCount: 30
      }
    });
  }
  startHardGame() {
    this.setState({
      gameStarted: true,
      gameData: {
        rows: 23,
        columns: 23,
        mineCount: 92
      }
    });
  }
  render() {
    const {
      gameStarted,
      gameData: {
        rows,
        columns,
        mineCount
      }
    } = this.state;
    const menu = gameStarted ? '' : (
      <Menu
        onEasyClick={this.startEasyGame.bind(this)}
        onMediumClick={this.startMediumGame.bind(this)}
        onHardClick={this.startHardGame.bind(this)}
      />
    );
    const game = !gameStarted ? '' : (
      <Game rows={rows} columns={columns} mineCount={mineCount} showMenu={this.menu.bind(this)} />
    );
    return (
      <div className='App'>
        {menu}
        {game}
      </div>
    );
  }
}

export default App;
