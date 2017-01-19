import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const response = 'date';
    return (
      <div className="App">
        Today { response }
      </div>
    );
  }
}

export default App;
