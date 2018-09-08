import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';

const Root = () => {
  return(
    <Router>
      <App/>
    </Router>
  )
}



render(<Root />, document.getElementById('root'));
