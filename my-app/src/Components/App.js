import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { browserHistory } from 'react-router';
//import logo from '../assets/logo.svg';
import './App.css';
import NavBar from './Header/NavBar.js'
import Footer from './Footer/Footer';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />          
            <Route path="/contact-us" component={ContactUs} />
          </Switch>
          <Footer />          
        </div>
      </Router>
    );
  }
}

export default App;
