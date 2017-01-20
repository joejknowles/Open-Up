import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Today { this.props.date }
      </div>
    );
  }
}
export default App;
