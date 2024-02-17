import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p><span style={{fontWeight:"bold"}}>Contact Us</span> <br/>Rekha Thorat<br/>Contact No: 9763286926 <br/>Email: mantha@gmail.com</p>
          </Col>
          <Col>
          <p><span style={{fontWeight:"bold"}}>Our Services</span></p>
            <ul>
              <li>Maintainence Recovery</li>
              <li>Compliances</li>
              <li>Financial Analysis</li>
            </ul>
            
          </Col>
          <Col>
            {/* <h5>Column 3</h5>
            <ul>
              <li><Link to="/">Link 1</Link></li>
              <li><Link to="/">Link 2</Link></li>
              <li><Link to="/">Link 3</Link></li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
