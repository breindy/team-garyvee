import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import './Map.scss'

import MapGL, { NavigationControl } from 'react-map-gl'

import MovieInfo from './MovieInfo'

const TOKEN =
  'pk.eyJ1IjoibXV5MDAwIiwiYSI6ImNqdGdkeGx1OTA0eWgzeXFzZ3g0dGdtOTUifQ.PmUezC2e4BrrICPpRJ3JPw'
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 37.7749,
        longitude: -122.4194,
        zoom: 11,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500
      }
    }
  }
  render() {
    const { viewport } = this.state
    return (
      <div class="map-component">
        <Container>
          <Jumbotron>
            <h3 className="text-center">Maps</h3>
          </Jumbotron>
          <Row className="show-grid">
            <Col md={6}>
              <div className="map-box">
                <MapGL
                  {...viewport}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                  mapboxApiAccessToken={TOKEN}
                >
                  <div className="nav" style={navStyle}>
                    <NavigationControl />
                  </div>
                </MapGL>
              </div>
            </Col>
            <Col md={6}>
              <MovieInfo />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Map
