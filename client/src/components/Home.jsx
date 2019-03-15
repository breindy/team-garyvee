import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.scss'

class Home extends Component {
  state = {}
  render() {
    return (
      <div>
        <Container>
          <div className="landing-section">
            <h1>The Local 415</h1>

            <Image
              className="logo"
              src="/assets/thelocal415.png"
              alt="theLocal415 logo"
              height="250"
              width="250"
            />

            <h2>Home of the movie map finder in San Francisco</h2>
            <div className="map-section">
              <Image
                className="map"
                src="/assets/map.png"
                alt="isometric map"
                height="300"
                width="500"
              />
              <br />
              <br />
              <br />
              <br />
              <h5>Find out what's around your neighborhood today!</h5>
              <br />
              <br />
              <Button bsstyle="btn">Explore</Button>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Home
