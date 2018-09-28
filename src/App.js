import React, { Component } from 'react';
import './App.css';
import Tasklist from './Tasklist';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Gitusers /> */}
        <Tasklist/>
      </div>
    );
  }
}

export default App;
