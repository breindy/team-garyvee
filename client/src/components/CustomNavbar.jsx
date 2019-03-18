import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CustomNavbar.scss'

class CustomNavbar extends Component {
  state = {}
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="text-white">
            <Link to="/" className="navbar-link">
              TheLocal415
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                to="/"
                componentClass={Link}
                eventKey={1}
                className="navbar-link"
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/about"
                componentClass={Link}
                eventKey={2}
                className="navbar-link"
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/map"
                componentClass={Link}
                eventKey={3}
                className="navbar-link"
              >
                Map
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default CustomNavbar
