import React, { Component } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Map from './components/Map'
import Navbar from './components/CustomNavbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/map" component={Map} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
