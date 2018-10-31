import React, { Component } from 'react';
import './App.css';

import Header from './component/Header';
import Footer from './component/Footer';
import MainPage from './component/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
        <Footer />

      </div>
    );
  }
}

export default App;
