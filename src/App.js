import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.1.css';
import HomeComponent from './components/homecomponent'
import Paintings from './components/paintingscomponent'
import About from './components/aboutcomponent'

class App extends Component {
  render() {
    return (
      <Router>
        <p><Link className='Link' to="/home">Home</Link><Link className='Link' to="/paintings">Paintings</Link><Link className='Link' to="/about">About</Link></p>
        <div>
          <Route exact path="/paintings" component={Paintings} />
          <Route exact path='/home' component={HomeComponent}></Route>
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
