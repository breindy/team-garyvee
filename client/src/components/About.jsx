import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

class About extends Component {
  state = {}
  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h3 className="text-center">About</h3>
          </Jumbotron>
        </Container>
      </div>
    )
  }
}

export default About
