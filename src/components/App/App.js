import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('/pokemon')
      .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
      </div>
    );
  }
}


export default App;
