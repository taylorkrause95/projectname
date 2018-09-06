import React, {Component} from 'react'
import { Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import DogForm from './components/dogForm'
import About from './components/About'
import Contact from './components/Contact'
import Adoption from './components/Adoption'


export default class App extends Component {
  render(){
    return(
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/form" component={DogForm} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/adoption" component={Adoption} />
      </div>
    )
  }
}
