import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import "./questionnare.css"

const MaintenanceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    societyName: '',
    societyAddress: '',
    totalFlats: '',
    flatsOnTime: '',
    flatsDelayed: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('entry.1731495867', e.target.name.value); 
    formData.append('entry.1659388524', e.target.email.value); 
    formData.append('entry.1673423008', e.target.societyName.value);
    formData.append('entry.1820845767', e.target.societyAddress.value);
    formData.append('entry.1295771913', e.target.totalFlats.value);
    formData.append('entry.1293440160', e.target.flatsOnTime.value); 
    formData.append('entry.1570858394', e.target.flatsDelayed.value);
    
    fetch('https://docs.google.com/forms/d/1t11Xn6w9FVN1d7xHsfeiOIN75i_vTnF-aSfcOchFZbY/formResponse?', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
        // Optionally, reset form data
        setFormData({
          name: '',
          email: '',
          societyName: '',
          societyAddress: '',
          totalFlats: '',
          flatsOnTime: '',
          flatsDelayed: ''
        });
      } else {
        console.error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };
  

  return (
    <Form onSubmit={handleSubmit}>
        <Row>
            <Col className='col-6' >
            <Form.Group controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            </Col>
            <Col className='col-6' >
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col className='col-6' >
            <Form.Group controlId="societyName">
                <Form.Label>Society Name</Form.Label>
                <Form.Control type="text" name="societyName" value={formData.societyName} onChange={handleChange} />
            </Form.Group>
            </Col>
            <Col className='col-6' >
            <Form.Group controlId="societyAddress">
                <Form.Label>Society Address</Form.Label>
                <Form.Control type="text" name="societyAddress" value={formData.societyAddress} onChange={handleChange} />
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col className='col-4' >
            <Form.Group controlId="totalFlats">
                <Form.Label>Total Flats in Society</Form.Label>
                <Form.Control type="number" name="totalFlats" value={formData.totalFlats} onChange={handleChange} />
            </Form.Group>
            </Col>
            <Col className='col-4' >
            <Form.Group controlId="flatsOnTime">
                <Form.Label>Number of Flats Paying Maintenance on Time</Form.Label>
                <Form.Control type="number" name="flatsOnTime" value={formData.flatsOnTime} onChange={handleChange} />
            </Form.Group>
            </Col>
            <Col className='col-4' >
            <Form.Group controlId="flatsDelayed">
                <Form.Label>Number of Flats Having Maintenance Delayed</Form.Label>
                <Form.Control type="number" name="flatsDelayed" value={formData.flatsDelayed} onChange={handleChange} />
            </Form.Group>
            </Col>
        </Row>
      <Button style={{marginTop:'2vh'}} variant="primary" type="submit">Submit</Button>



      {/* <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
      </Form.Group> */}
      {/* <Form.Group controlId="societyName">
        <Form.Label>Society Name</Form.Label>
        <Form.Control type="text" name="societyName" value={formData.societyName} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="societyAddress">
        <Form.Label>Society Address</Form.Label>
        <Form.Control type="text" name="societyAddress" value={formData.societyAddress} onChange={handleChange} />
      </Form.Group> */}
      {/* <Form.Group controlId="totalFlats">
        <Form.Label>Total Flats in Society</Form.Label>
        <Form.Control type="number" name="totalFlats" value={formData.totalFlats} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="flatsOnTime">
        <Form.Label>Number of Flats Paying Maintenance on Time</Form.Label>
        <Form.Control type="number" name="flatsOnTime" value={formData.flatsOnTime} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="flatsDelayed">
        <Form.Label>Number of Flats Having Maintenance Delayed</Form.Label>
        <Form.Control type="number" name="flatsDelayed" value={formData.flatsDelayed} onChange={handleChange} />
      </Form.Group> */}
    </Form>
  );
};

export default MaintenanceForm;
