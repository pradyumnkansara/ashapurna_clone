import React from 'react'
import Header from '../common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../common/Footer'

export default function NriCorner() {
    return (
        <>
            <Header />
            <Container fluid className='about-ban' style={{ padding: '110px 0px' }}>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='text-white mb-2'>
                        <span className='text-uppercase' style={{ fontSize: '19px' }}>Home/NRI Corner

                        </span>
                    </div>
                    <h1 className='fw-bold' style={{ color: '#be8553' }}>NRI Corner
                    </h1>
                </div>
            </Container>
            <Container fluid className='py-5'>
                <Container>
                    <h2 className='text-center fw-bold my-2 mb-5' style={{ fontSize: '40px', color: '#062F43' }}>NRI</h2>
                    <Row className='mt-5'>
                        <Col lg={6}>
                            <div>
                                <div>
                                    <p className='text-uppercase sect-sr position-relative mb-0'>NRI</p>
                                    <h2 className=' fw-bold my-2' style={{ fontSize: '35px', color: '#062F43' }}>NRI Clients <span style={{ color: "#be8553" }}>Corner</span></h2>
                                    <p style={{ color: '#5a5a5a' }}>
                                        A non-resident Indian (NRI) is a citizen of India who holds an Indian passport and has temporarily emigrated to another country for six months or more for employment, residence, education or any other such purpose. A person of Indian origin (PIO) is a person of Indian origin or ancestors but who is not a citizen of India and is the citizen of another country. A PIO might have been a citizen of India and subsequently taken citizenship of another country, or have ancestors born in India or other states. Other terms with vaguely the same meaning are overseas Indian and expatriate India. In common usage, this often includes Indian-born individuals (and also people of other nations with Indian ancestors) who have taken the citizenship of other countries. As per the Ministry of Overseas Indian Affairs, India has the second largest diaspora in the world after overseas Chinese. The overseas Indian community is estimated at 25 million spread across every region of the world.
                                    </p>
                                </div>
                                <h2 style={{ color: '#5a5a5a' }}>Investment destination: India</h2>
                                <p style={{ color: '#5a5a5a' }}>
                                    In recent times, India has emerged as one of the popular real estate destinations for global investors. Real estate is one of the booming industries in the country and investment in property is promising and set to flourish in the times to come. It is expected to scale new heights with the emergence of fresh localities in tier-I and II cities.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='shadow-lg rounded p-4' style={{borderLeft:'5px solid #be8553'}}>
                                <h4>NRI ENQUIRY</h4>
                                <p style={{ color: '#5a5a5a' }}>Please fill in the form and we would contact you at the earliest.</p>
                                <form>
                                    <div className='my-4'>
                                        <input type="text" placeholder='Name' className='w-100 p-3 rounded'/>
                                    </div>
                                    <div className='my-4'>
                                        <input type="text" placeholder='Name' className='w-100 p-3 rounded'/>
                                    </div>
                                    <div className='my-4'>
                                        <input type="text" placeholder='Name' className='w-100 p-3 rounded'/>
                                    </div>
                                    <div className='my-4'>
                                        <input type="text" placeholder='Message' className='w-100 p-2 rounded pb-5'/>
                                    </div>
                                    <div className='text-center '>
                                        <button className='px-5 py-3 text-uppercase sub-btn rounded'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer/>   
        </>
    )
}
