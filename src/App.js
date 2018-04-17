import React, { Component } from 'react';
import Menu from './components/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu__container">
          <Menu />
        </div>
        <div className="content__container">

        </div>
      </div>
    );
  }
}

export default App;