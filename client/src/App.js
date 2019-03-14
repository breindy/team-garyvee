import React, { Component } from 'react';
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <div className="landing-section">
          <h1>The Local 415</h1>

          <img className="logo" src="/assets/thelocal415.png" alt="theLocal415 logo" height="250" width="250"></img>

          <h2>Home of the movie map finder in San Francisco</h2>
        </div>
      </div>
    );
  }
}

export default App;
