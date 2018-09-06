import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import dogForm from './dogForm';

class Nav extends React.Component {
  render() {
    return (
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to='/adoption'>Adoption</Link></li>
        </nav>
    );
  }
}

export default Nav;
