import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age:29},
      {name: 'Manu', age: 28},
      {name: 'Stephanie', age:25}
    ]
  }
  switchNameHandler = () =>{
    //console.log('Was Clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState()
  }

  render() {
    return (
      <div className="App">
      <h1>REACT Application</h1>
        <h1>Hi, Im a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name="Manu" age="28">My hobbies: Racing</Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );
  }
}

export default App;
