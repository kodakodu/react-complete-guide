import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>REACT Application</h1>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Person name="Max" age="29"/>
        <Person name="Manu" age="28">My hobbies: Racing</Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );
  }
}

export default App;
