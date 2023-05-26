import './LogoClient.css'
import React, {useState} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Logo (){
    const [logos ,setlogos] = useState([
        {id:1, image:'./images/Logo/client-1.png'},
        {id:2, image:'./images/Logo/client-2.png'},
        {id:3, image:'./images/Logo/client-3.png'},
        {id:4, image:'./images/Logo/client-4.png'},
        {id:5, image:'./images/Logo/client-5.png'},
        {id:6, image:'./images/Logo/client-6.png'},
    ])
    return(
        <section className="logo">
            <Container>
                <Row>
                    <Col md={12} >
                               <div className="logo-Client" >
                        {logos.map((logo)=>(
                               <img src={logo.image} alt="logo" className="logo-Client-img" />
                               ))}
                           </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}