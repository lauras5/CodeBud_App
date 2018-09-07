import React, { Component, Fragment } from 'react';
import './App.css';
import AppRouter from './approuter';
import PgFooter from './components/Footer/Footer';

class App extends Component {
  render() {
      return(
        <Fragment>
          <AppRouter/>
          <PgFooter/>
        </Fragment>
      )
  }
}

export default App;
