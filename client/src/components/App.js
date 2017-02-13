import React, { Component } from 'react';
import '../styles/App.css';
import Alerts from './alerts';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Alerts />
        { this.props.children }
      </div>
    );
  }
}

export default App;
