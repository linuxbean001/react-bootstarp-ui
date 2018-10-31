import React, { Component } from 'react';
import './App.css';

import RouterOutlet from './component/Router-outlet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterOutlet />
      
      </div>
    );
  }
}

export default App;
