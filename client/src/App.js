import React, { Component } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'


class App extends Component {
  render() {
    return (
      <Home></Home>
    )
  }
}

export default App
