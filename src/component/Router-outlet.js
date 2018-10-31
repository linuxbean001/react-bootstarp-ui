import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';
import Login from './Login';
import TestPage from './TestPage';
import AssignedItem from './AssignedItem';

class RouterOutlet extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }


  componentWillMount() {


  }


  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route path='/login' component={Login} />
              <Route path='/test' component={TestPage} />
              <Route path='/assign' component={AssignedItem} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default RouterOutlet;