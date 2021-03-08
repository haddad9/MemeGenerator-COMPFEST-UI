import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'


function Navbar_() {
  return (

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home"   > KESEGARAN.COMPFEST</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Nav className="ml-auto">
        <Nav.Link href="#home" >Explore</Nav.Link>
        <Nav.Link href="#link"  >Saved</Nav.Link>

      </Nav>

    </Navbar>
  )
}

export default Navbar_
