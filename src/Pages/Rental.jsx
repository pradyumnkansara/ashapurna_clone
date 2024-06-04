import React from 'react'
import Header from '../common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import aangan from '../images/ashapurna-aangan-budget-house-in-jodhpur-1682079322.webp'
import aaganlogo from '../images/ashapurna-aangan-logo-1677495610.webp'
import Footer from '../common/Footer'

export default function Rental() {
    return (
        <>
            <Header />
            <Container fluid className='about-ban' style={{ padding: '110px 0px' }}>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='text-white mb-2'>
                        <span className='text-uppercase' style={{ fontSize: '19px' }}>Home/Rental And Lease</span>
                    </div>
                    <h1 className='fw-bold' style={{ color: '#be8553' }}>Rental And Lease</h1>
                </div>
            </Container>
            <Container fluid className='py-5'>
                <h2 className='text-center fw-bold my-5' style={{ fontSize: '40px', color: '#062F43' }}>Rental & Lease Projects</h2>
                <Container>
                    <Row className='gy-3'>
                        <Col lg={4}>
                            <div className=' mb-5'>
                                <div className='prj-border position-relative shadow rounded'>
                                    <img src={aangan} className='img-fluid' />
                                    <div className='bg-white sub-proj rounded mx-auto px-3 shadow-sm'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <img src={aaganlogo} width="80px" />
                                            </div>
                                            <h5>
                                                <a href="">
                                                    Ashapurna Aangan
                                                </a>
                                            </h5>
                                        </div>
                                        <div className='d-flex sub-proj-bottom'>
                                            <div>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </div>
                                            <div>
                                                <p className='ms-2 mb-0'>
                                                    Banar, Jodhpur
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between pb-2 align-items-center sub-hide'>
                                            <div className='d-flex sub-proj-bottom'>
                                                <div>
                                                    <FontAwesomeIcon icon={faHome} />
                                                </div>
                                                <div>
                                                    <p className='ms-2 mb-0'>
                                                        Possesion Soon
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='proj-btn text-white border-0 p-2 rounded'>See All</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='prj-tag text-white rounded position-absolute p-2'>
                                        Possesion Soon
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className=' mb-5'>
                                <div className='prj-border position-relative shadow rounded'>
                                    <img src={aangan} className='img-fluid' />
                                    <div className='bg-white sub-proj rounded mx-auto px-3 shadow-sm'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <img src={aaganlogo} width="80px" />
                                            </div>
                                            <h5>
                                                <a href="">
                                                    Ashapurna Aangan
                                                </a>
                                            </h5>
                                        </div>
                                        <div className='d-flex sub-proj-bottom'>
                                            <div>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </div>
                                            <div>
                                                <p className='ms-2 mb-0'>
                                                    Banar, Jodhpur
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between pb-2 align-items-center sub-hide'>
                                            <div className='d-flex sub-proj-bottom'>
                                                <div>
                                                    <FontAwesomeIcon icon={faHome} />
                                                </div>
                                                <div>
                                                    <p className='ms-2 mb-0'>
                                                        Possesion Soon
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='proj-btn text-white border-0 p-2 rounded'>See All</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='prj-tag text-white rounded position-absolute p-2'>
                                        Possesion Soon
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className=' mb-5'>
                                <div className='prj-border position-relative shadow rounded'>
                                    <img src={aangan} className='img-fluid' />
                                    <div className='bg-white sub-proj rounded mx-auto px-3 shadow-sm'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <img src={aaganlogo} width="80px" />
                                            </div>
                                            <h5>
                                                <a href="">
                                                    Ashapurna Aangan
                                                </a>
                                            </h5>
                                        </div>
                                        <div className='d-flex sub-proj-bottom'>
                                            <div>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </div>
                                            <div>
                                                <p className='ms-2 mb-0'>
                                                    Banar, Jodhpur
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between pb-2 align-items-center sub-hide'>
                                            <div className='d-flex sub-proj-bottom'>
                                                <div>
                                                    <FontAwesomeIcon icon={faHome} />
                                                </div>
                                                <div>
                                                    <p className='ms-2 mb-0'>
                                                        Possesion Soon
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='proj-btn text-white border-0 p-2 rounded'>See All</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='prj-tag text-white rounded position-absolute p-2'>
                                        Possesion Soon
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className=' mb-5'>
                                <div className='prj-border position-relative shadow rounded'>
                                    <img src={aangan} className='img-fluid' />
                                    <div className='bg-white sub-proj rounded mx-auto px-3 shadow-sm'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <img src={aaganlogo} width="80px" />
                                            </div>
                                            <h5>
                                                <a href="">
                                                    Ashapurna Aangan
                                                </a>
                                            </h5>
                                        </div>
                                        <div className='d-flex sub-proj-bottom'>
                                            <div>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </div>
                                            <div>
                                                <p className='ms-2 mb-0'>
                                                    Banar, Jodhpur
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between pb-2 align-items-center sub-hide'>
                                            <div className='d-flex sub-proj-bottom'>
                                                <div>
                                                    <FontAwesomeIcon icon={faHome} />
                                                </div>
                                                <div>
                                                    <p className='ms-2 mb-0'>
                                                        Possesion Soon
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='proj-btn text-white border-0 p-2 rounded'>See All</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='prj-tag text-white rounded position-absolute p-2'>
                                        Possesion Soon
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className=' mb-5'>
                                <div className='prj-border position-relative shadow rounded'>
                                    <img src={aangan} className='img-fluid' />
                                    <div className='bg-white sub-proj rounded mx-auto px-3 shadow-sm'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <img src={aaganlogo} width="80px" />
                                            </div>
                                            <h5>
                                                <a href="">
                                                    Ashapurna Aangan
                                                </a>
                                            </h5>
                                        </div>
                                        <div className='d-flex sub-proj-bottom'>
                                            <div>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </div>
                                            <div>
                                                <p className='ms-2 mb-0'>
                                                    Banar, Jodhpur
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between pb-2 align-items-center sub-hide'>
                                            <div className='d-flex sub-proj-bottom'>
                                                <div>
                                                    <FontAwesomeIcon icon={faHome} />
                                                </div>
                                                <div>
                                                    <p className='ms-2 mb-0'>
                                                        Possesion Soon
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='proj-btn text-white border-0 p-2 rounded'>See All</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='prj-tag text-white rounded position-absolute p-2'>
                                        Possesion Soon
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className=' mb-5'>
                                <div className='prj-border position-relative shadow rounded'>
                                    <img src={aangan} className='img-fluid' />
                                    <div className='bg-white sub-proj rounded mx-auto px-3 shadow-sm'>
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <img src={aaganlogo} width="80px" />
                                            </div>
                                            <h5>
                                                <a href="">
                                                    Ashapurna Aangan
                                                </a>
                                            </h5>
                                        </div>
                                        <div className='d-flex sub-proj-bottom'>
                                            <div>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </div>
                                            <div>
                                                <p className='ms-2 mb-0'>
                                                    Banar, Jodhpur
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between pb-2 align-items-center sub-hide'>
                                            <div className='d-flex sub-proj-bottom'>
                                                <div>
                                                    <FontAwesomeIcon icon={faHome} />
                                                </div>
                                                <div>
                                                    <p className='ms-2 mb-0'>
                                                        Possesion Soon
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='proj-btn text-white border-0 p-2 rounded'>See All</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='prj-tag text-white rounded position-absolute p-2'>
                                        Possesion Soon
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    )
}
