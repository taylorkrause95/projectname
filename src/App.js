import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import DogForm from './components/dogForm'
import About from './components/About'
import Contact from './components/Contact'
import Adoption from './components/Adoption'
import axios from 'axios'


 export default class App extends Component {
  render() {
    return (
      <div className="App">

            <li><Link to="/Nav">Nav</Link></li>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Adoption">Adoption</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/dogForm">dogForm</Link></li>
      <Route path="/Nav" component={Nav} />
      <Route path="/Home" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Adoption" component={Adoption} />
      <Route path="/Contact" component={Contact} />
      <Route path="/DogForm" component={DogForm} />
    </div>
  );
  }
}
