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
          <Row className="show-grid text-center">
            <Col md={6}>
              <div class="landing-section">
                <h1>The Local 415</h1>
                <Image
                  className="logo"
                  src="/assets/thelocal415.png"
                  alt="theLocal415 logo"
                  height="250"
                  width="250"
                />
                <p className="heading-paragraph">
                  Map finding made easy in the local San Francisco Area
                </p>
              </div>
            </Col>
            <Col md={6}>
              <Image src="assets/map.png" className="profile-pic" />
              <h5>Find out what's around your neighborhood today!</h5>
              <br />
              <Link to="/map">
                <Button bsStyle="btn">Explore</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
