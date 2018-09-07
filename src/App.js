import React, {Component} from 'react'
import { Route } from 'react-router-dom'

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
      <div> 
<Nav />
<Home />
<About />
<Adoption />
<Contact />
<dogForm />


      </div>
    )
  }
}
