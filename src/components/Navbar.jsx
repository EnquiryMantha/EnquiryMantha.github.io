import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import "./Navbar.css"

const NavigationBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">Mantha</Navbar.Brand>{/*<img src=".\src\assets\Acceleracers_Logo_Light.png" alt="logo" /> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
          <div style={{display:'flex',justifyContent:'flex-end', width:'100%'}}>
          <Nav.Link as={Link} to="https://www.linkedin.com/in/jadhavrshubham/"><img src="linkedin.png" alt="" style={{width:'30px'}}/></Nav.Link>
          <Nav.Link as={Link} to="https://www.linkedin.com/in/jadhavrshubham/"><img src="FB.png" alt="" style={{width:'30px'}}/></Nav.Link>
          <Nav.Link as={Link} to="https://www.linkedin.com/in/jadhavrshubham/"><img src="Instagram.png" alt="" style={{width:'30px'}}/></Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
