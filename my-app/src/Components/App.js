import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
          <Route exact path="/" component={Home} />          
          <Route path="/contact-us" component={ContactUs} />
          <Footer />          
        </div>
      </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
