import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age:29},
      {name: 'Manu', age: 28},
      {name: 'Stephanie', age:25}
    ],
    showPersons: false
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 29 },
        { name: event.target.value, age: 28 },
        {name : 'Stephanie', age: 27}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;

    if(this.state.showPersons){
      persons = (
        
        <div>
          {this.state.persons.map(person => {
            return <Person 
                      name={person.name} 
                      age={person.age} />
          })}
        
      </div>
      );
    }

    return (
      <div className="App">
      <h1>REACT Application</h1>
        <h1>Hi, Im a React App</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>    
        {persons}
      </div>
    );
  }
}

export default App;
