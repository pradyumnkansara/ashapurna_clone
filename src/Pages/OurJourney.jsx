import React from 'react'
import Header from '../common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import exp from '../images/experience-check.svg'
import Footer from '../common/Footer'


export default function OurJourney() {
    return (
        <>
            <Header />
            <Container fluid className='about-ban' style={{ padding: '110px 0px' }}>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='text-white mb-2'>
                        <span className='text-uppercase' style={{ fontSize: '19px' }}>Home/Our Journey
                        </span>
                    </div>
                    <h1 className='fw-bold' style={{ color: '#be8553' }}>Our Journey
                    </h1>
                </div>
            </Container>
            <Container fluid className='our-journey'>
                <Container className='py-5'>
                    <Row className='justify-content-end mt-5'>
                        <Col xs={12} lg={8}>
                            <div className='p-4 bg-white achivement-box shadow-lg'>
                                <p className='text-uppercase sect-journey position-relative mb-0'>OUR JOURNEY</p>
                                <h2 className='fw-bold mb-3'>A Brief About Our Journey</h2>
                                <div style={{ color: '#5a5a5a' }}>
                                    <p>
                                        Ashapurna started its journey in 1996 and registered as a Private Limited Company. After a year it turned into a Limited Company. We are proud that Ashapurna Buildcon Ltd. became the first ISO: 9001: 2000 Certified Company of western Rajasthan in the year 2004. Ashapurna Started its first project of 400 Villas / Plot in 1997 and completed it within the record time period of 18 months.
                                    </p>
                                    <p>
                                        Then in a series every project that was started, was completed within an 18-month period. Till now a total of 42 projects consisting of around 6000 Villas, and around 18,000 Plots in various Residential townships / Commercial malls / Residential Multistoried complexes have already been completed and handed over to the respective customers. Shri Karan Singh Unchiyarda is also a recognized person in the hospitality sector as a renowned hotelier. The prestigious three-star comforts Residency Palace Hotel is a unique landmark in the city of Jodhpur.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='py-5'>
                <Container className='review-sect py-5'>
                    <Row>
                        <Col xs={6} lg={3}>
                            <div className='text-center'>
                                <div className='text-center '>
                                    <img src={exp} className='bg-white p-3 rounded' />

                                </div>
                                <h3 className='mt-3 fw-bold' style={{ color: '#be8553' }}>26+</h3>
                                <p className='pb-0 fw-medium text-white'>Years Of Experience</p>
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className='text-center'>
                                <div className='text-center '>
                                    <img src={exp} className='bg-white p-3 rounded' />

                                </div>
                                <h3 className='mt-3 fw-bold' style={{ color: '#be8553' }}>26+</h3>
                                <p className='pb-0 fw-medium text-white'>Years Of Experience</p>
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className='text-center'>
                                <div className='text-center '>
                                    <img src={exp} className='bg-white p-3 rounded' />

                                </div>
                                <h3 className='mt-3 fw-bold' style={{ color: '#be8553' }}>26+</h3>
                                <p className='pb-0 fw-medium text-white'>Years Of Experience</p>
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className='text-center'>
                                <div className='text-center '>
                                    <img src={exp} className='bg-white p-3 rounded' />

                                </div>
                                <h3 className='mt-3 fw-bold' style={{ color: '#be8553' }}>26+</h3>
                                <p className='pb-0 fw-medium text-white'>Years Of Experience</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='py-5'>
                <h2 className='text-center fw-bold my-5' style={{ fontSize: '35px', color: '#062F43' }}>Our Flourishing Journey Over The Last Decade
                </h2>
                <Container className='position-relative'>
                    <div className='decade-block' style={{ padding: "0px 150px" }}>
                        <Row>
                            <Col xs={12} className='my-4'>
                                <Row>
                                    <Col xs={12} lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='justify-content-end my-4'>
                                <Row className='justify-content-end'>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box-rgt'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle-rgt'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='my-4'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='justify-content-end my-4'>
                                <Row className='justify-content-end'>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box-rgt'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle-rgt'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='my-4'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='justify-content-end my-4'>
                                <Row className='justify-content-end'>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box-rgt'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle-rgt'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='my-4'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='justify-content-end my-4'>
                                <Row className='justify-content-end'>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box-rgt'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle-rgt'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='my-4'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='justify-content-end my-4'>
                                <Row className='justify-content-end'>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box-rgt'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle-rgt'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='my-4'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='justify-content-end my-4'>
                                <Row className='justify-content-end'>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box-rgt'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle-rgt'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='my-4'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='justify-content-end my-4'>
                                <Row className='justify-content-end'>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box-rgt'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle-rgt'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='my-4'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='justify-content-end my-4'>
                                <Row className='justify-content-end'>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box-rgt'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle-rgt'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='my-4'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='justify-content-end my-4'>
                                <Row className='justify-content-end'>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box-rgt'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle-rgt'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='my-4'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='justify-content-end my-4'>
                                <Row className='justify-content-end'>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box-rgt'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle-rgt'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='my-4'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} className='justify-content-end my-4'>
                                <Row className='justify-content-end'>
                                    <Col lg={4}>
                                        <div className='p-4 shadow-lg rounded position-relative decade-box-rgt'>
                                            <h2 className='text-center fw-bold' style={{ color: '#062f43' }}>2022</h2>
                                            <ul className='mx-5'>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                                <li className=''>Ashapurna NRI</li>
                                            </ul>
                                            <div className='decade-circle-rgt'>
                                                <span className='decade-inncircle'></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
            <Footer />
        </>
    )
}
