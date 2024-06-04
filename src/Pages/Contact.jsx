import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <>
            <Header />
            <Container fluid className='about-ban' style={{ padding: '110px 0px' }}>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='text-white mb-2'>
                        <span className='text-uppercase' style={{ fontSize: '19px' }}>Home/Contact Us</span>
                    </div>
                    <h1 className='fw-bold' style={{ color: '#be8553' }}>Contact Us</h1>
                </div>
            </Container>
            <Container fluid className='py-5'>
                <Container>
                    <h2 className='text-center fw-bold my-4' style={{ fontSize: '35px', color: '#062F43' }}>Get In Touch</h2>
                    <p className='text-center mx-2' style={{ color: '#5a5a5a', fontSize: '14px' }}>To request a quote, contact us directly or fill out the form and we will get back to you promptly.</p>
                    <Row className='gy-3'>
                        <Col xs={12} lg={4}>
                            <div className='px-3 py-4 rounded' style={{ backgroundColor: '#be8553' }}>
                                <Row>
                                    <Col xs={2}>
                                        <div>
                                            <div className='icon-outer'>
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={8}>
                                        <div className='ms-2'>
                                            <h5 className='fw-medium' style={{ color: '#062f43' }}>Email</h5>
                                            <div>
                                                <a href="" style={{ color: '#fff' }}>
                                                    marketing@ashapurna.com
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <div className='px-3 py-4 rounded' style={{ backgroundColor: '#be8553' }}>
                                <Row>
                                    <Col xs={2}>
                                        <div>
                                            <div className='icon-outer'>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={8}>
                                        <div className='ms-2'>
                                            <h5 className='fw-medium' style={{ color: '#062f43' }}>Address</h5>
                                            <div>
                                                <a href="" style={{ color: '#fff' }}>
                                                -, 4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD,
                                                    OPPOSITE LIC OFFICE, Jodhpur, Rajasthan, 342011
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <div className='px-3 py-4 rounded' style={{ backgroundColor: '#be8553' }}>
                                <Row>
                                    <Col xs={2}>
                                        <div>
                                            <div className='icon-outer'>
                                                <FontAwesomeIcon icon={faPhone} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={8}>
                                        <div className='ms-2'>
                                            <h5 className='fw-medium' style={{ color: '#062f43' }}>Support</h5>
                                            <div>
                                                <a href="tel:9314041747,0291-2514747, 9610383747" style={{ color: '#fff' }}>
                                                9314041747,0291-2514747, 9610383747
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='py-5'>
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <div>
                                <h4>Find Us On Map</h4>
                                <div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d915836.6880339213!2d73.037212!3d26.278306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941f34ed8648e03%3A0x35b840646df082cc!2sAshapurna%20Buildcon%20Ltd%20Corporate%20office!5e0!3m2!1sen!2sus!4v1702969918416!5m2!1sen!2sus" width="100%" height="450px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className='bg-white shadow-lg rounded p-4' style={{ borderLeft: '8px solid #be8553' }}>
                                <p className='contact-head-sub position-relative mb-0'>Write to us!</p>
                                <h4 className='my-2' style={{ color: '#062f43' }}>Have A Question?</h4>
                                <form>
                                    <Row className='gy-4'>
                                        <Col lg={6}>
                                            <div className='contact-input'>
                                                <input type="text" placeholder='Name' className='px-2 py-3' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='contact-input'>
                                                <input type="text" placeholder='Email' className='px-2 py-3' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='contact-input'>
                                                <input type="text" placeholder='Phone' className='px-2 py-3' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='contact-input'>
                                                <input type="text" placeholder='Subject' className='px-2 py-3' />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='contact-input'>
                                                <input type="text" placeholder='Message' className='px-2 pt-2 pb-5' />
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className='text-center mt-4'>
                                        <button className='py-3 px-5 contact-btn'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    )
}
