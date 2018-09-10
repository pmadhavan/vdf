import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import '../../styles/Common.css';
import logo from '../../assets/logo.svg';

class NavBar extends Component {
    render() {
        return (
            <header className="flexContainer navBar">
                <ul className="flexItem flexStart nav">
                    <li>
                        <img alt= "VDF" src={logo} width="100" height="50"/>
                    </li>
                </ul>
                <ul id="headerButtons" className="flexContainer flexEnd nav">
                    <li className="navButton"><Link to="/">Home</Link></li>                    
                    <li className="navButton"><Link to="contact-us">Contact Us</Link></li>
                </ul>
            </header>
        )
    }
}

export default NavBar;

