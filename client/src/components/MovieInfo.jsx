import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import './MovieInfo.scss'

class MovieInfo extends Component {
  state = {}
  render() {
    return (
      <div>
        <Container>
          <h3>Movie Info Box</h3>
          <p>Movie: </p>
          <p>Actor: </p>
          <p>Street: </p>
          <p>Year Released: </p>
        </Container>
      </div>
    )
  }
}

export default MovieInfo
