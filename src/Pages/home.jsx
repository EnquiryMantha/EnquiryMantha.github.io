import React from 'react'
import "./home.css"
import { useState, useEffect, useRef } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import BasePage from './../components/base';
import MaintenanceForm from '../components/questionnare';


const Home = () => {
    const maincontent = (
        <div className='maincontainer'>
            <div className='intro_screen'>
            <h1 style={{fontSize:'48px'}}>Clean Record</h1>
            {/* <h3>By Mantha Services</h3> */}
            <p>-"A penny saved is a penny earned" </p>
            <p>Services Offered: Housing Society <br/>
                <span style={{fontWeight:'600'}}>Maintainence Recovery</span><br/>
                <span style={{fontWeight:'600'}}>Compliances</span><br/>
                <span style={{fontWeight:'600'}}>Financial Analysis</span><br/>
            
            </p>
            <button className='connectwithus'> <a style={{textDecoration:'none', color:'black'}} target="_blank" href="https://api.whatsapp.com/send/?phone=9763286926&text&type=phone_number">Connect With Us  <img style={{width:'40px'}} src="assets/whatsapp.png" alt="" /></a></button>
        </div>

            <div className='aboutus'>
                <h2>About Us</h2>
                <p style={{textAlign:'justify'}}>

                Once upon a time in the bustling city of Metropolis, there was a startup named Mantha Services, a beacon of hope for Housing Societies seeking clarity and ease in their financial management. Founded with a vision to simplify the intricate world of bookkeeping and compliance, Mantha Services emerged as a dynamic and dedicated partner for societies yearning for tailored solutions.
<br/><br/>In the heart of the city, Clean Slate by Mantha became the go-to destination for societies facing the challenges of navigating the complex landscape of financial intricacies. The team at Clean Slate, comprised of seasoned professionals including Chartered Accountants, Advocates, certified accountants, financial analysts, and operation and compliance experts, brought a wealth of expertise to the table, promising a seamless and stress-free experience for their clients.
<br/><br/>At the core of Mantha Services' mission was the empowerment of societies to thrive. They envisioned a world where financial records were not just accurate and compliant but optimized for growth, fostering a sense of community and trust among the residents.
<br/><br/>Mantha Services wasn't just a company, it was a brainchild of a group of passionate individuals who understood the unique needs of Housing Societies. Each member of the team was committed to delivering excellence in every aspect of their service, making Mantha Services stand out in the crowded market.
<br/><br/> <span style={{fontWeight:'600'}}>What set Mantha Services apart were its core principles:</span>                   
                    
                    
                    </p>
                    <ol style={{textAlign:'justify', fontSize:'18px'}}>
                        <li><span style={{fontWeight:'600'}}>Expertise: </span>The team at Clean Slate was well-versed in the latest accounting standards and regulatory requirements, staying ahead of industry trends to provide up-to-date and accurate financial solutions</li>
                        <li><span style={{fontWeight:'600'}}>Personalized Service: : </span>Recognizing the uniqueness of each Housing Society, Mantha Services offered tailored services to meet specific needs, whether it was a small community or a large one.</li>
                        <li><span style={{fontWeight:'600'}}>Technology Integration:  </span>Leveraging cutting-edge technology, Mantha Services aimed to streamline processes, enhance accuracy, and save time. Their commitment was not just about compliance but delivering the best fund allocation and utilization.</li>
                        <li><span style={{fontWeight:'600'}}>Transparency: </span>Building strong, trusting relationships with their clients was a cornerstone of Mantha Services. Transparent communication and clear reporting ensured that societies had a complete understanding of their financial status at all times.</li>
                    </ol>
            </div>

            <div className='ourteam'>
                <h2 >Our Team</h2>
                <Card>
                    <Row>
                        <Col md={4} xs={12} style={{textAlign:'center'}}><img src="assets/CA.jpg" alt="" /></Col>
                        <Col md={8} xs={12}> 
                            <h3 style={{textAlign:'left'}}>Chartered Accountant</h3>
                            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida finibus orci at vehicula. Morbi 
                    ac bibendum nulla. Aliquam mattis elit vel purus porttitor venenatis. Aenean tincidunt rutrum lobortis. 
                    Aenean hendrerit mi non nisi facilisis, ac sollicitudin nisl ultrices. Praesent ultrices augue quis leo semper 
                    pretium. Integer semper neque et nisl ullamcorper sagittis. Aenean non mattis metus, quis sodales lacus. Donec 
                    at orci nec tortor maximus finibus in sit amet orci. Sed cursus suscipit tortor sed semper. Fusce sed dolor in 
                    turpis tempor egestas.</p>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Col md={4} xs={12} style={{textAlign:'center'}}><img src="assets/lawyer.png" alt="" /></Col>
                        <Col md={8} xs={12}> 
                            <h3 style={{textAlign:'left'}}>Lawyer</h3>
                            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida finibus orci at vehicula. Morbi 
                    ac bibendum nulla. Aliquam mattis elit vel purus porttitor venenatis. Aenean tincidunt rutrum lobortis. 
                    Aenean hendrerit mi non nisi facilisis, ac sollicitudin nisl ultrices. Praesent ultrices augue quis leo semper 
                    pretium. Integer semper neque et nisl ullamcorper sagittis. Aenean non mattis metus, quis sodales lacus. Donec 
                    at orci nec tortor maximus finibus in sit amet orci. Sed cursus suscipit tortor sed semper. Fusce sed dolor in 
                    turpis tempor egestas.</p>
                        </Col>
                    </Row>
                </Card>

                <Card>
                    <Row>
                        <Col md={4} xs={12} style={{textAlign:'center'}}><img src="assets/lawyer.png" alt="" /></Col>
                        <Col md={8} xs={12}> 
                            <h3 style={{textAlign:'left'}}>HR</h3>
                            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida finibus orci at vehicula. Morbi 
                    ac bibendum nulla. Aliquam mattis elit vel purus porttitor venenatis. Aenean tincidunt rutrum lobortis. 
                    Aenean hendrerit mi non nisi facilisis, ac sollicitudin nisl ultrices. Praesent ultrices augue quis leo semper 
                    pretium. Integer semper neque et nisl ullamcorper sagittis. Aenean non mattis metus, quis sodales lacus. Donec 
                    at orci nec tortor maximus finibus in sit amet orci. Sed cursus suscipit tortor sed semper. Fusce sed dolor in 
                    turpis tempor egestas.</p>
                        </Col>
                    </Row>
                </Card>
            </div>
            <div className='services'>
                <h2>Our services</h2>
                <p style={{textAlign:'justify'}}>The services offered by Mantha Services were designed to simplify the lives of societies:</p>
                <ol style={{textAlign:'justify', fontSize:'18px'}}>
                    <li><span style={{fontWeight:'600'}}>Bookkeeping: </span>From daily transactions to financial statement preparation, Clean Slate handled the details, allowing societies to focus on maintaining a healthy work-life balance.</li>
                    <li><span style={{fontWeight:'600'}}>Compliance: </span>Navigating the ever-changing regulatory landscape, Mantha Services kept housing societies compliant with laws and reporting requirements.</li>
                    <li><span style={{fontWeight:'600'}}>Financial Analysis: </span>Providing valuable insights into the financial health of societies through comprehensive analysis and reporting services.</li>
                </ol>
            </div>

            <div className='questionnare' >
                <h2>Help Us Improve our Services</h2>
                <MaintenanceForm/>
            </div>
        </div>
        
    )
    return <BasePage maincontent={maincontent} />;
}
export default Home