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
  switchNameHandler = (newName) =>{
    //console.log('Was Clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Manu', age: 28 },
        {name : 'Stephanie', age: 27}
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <h1>REACT Application</h1>
        <h1>Hi, Im a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
        <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}>My hobbies: Racing</Person>
        <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
