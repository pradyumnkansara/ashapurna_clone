import React from 'react'
import Header from '../common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import windimg from '../images/wind-mill.webp'
import Footer from '../common/Footer'

export default function Windmills() {
    return (
        <>
            <Header />
            <Container fluid className='about-ban' style={{ padding: '110px 0px' }}>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='text-white mb-2'>
                        <span className='text-uppercase' style={{ fontSize: '19px' }}>Home/Windmills Projects
                        </span>
                    </div>
                    <h1 className='fw-bold' style={{ color: '#be8553' }}>Windmills Projects
                    </h1>
                </div>
            </Container>
            <Container fluid className='py-5'>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div>
                                <img src={windimg} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div>
                                <h2 className=' fw-bold my-4' style={{ fontSize: '40px', color: '#062F43' }}>Windmills Projects
                                </h2>
                                <p className='pt-0' style={{ color: '#5a5a5a' }}>
                                    Ashapurna buildcon limited is rapidly growing towards windmill projects because we believe in environment-friendly development that’s why Windmill Project in India are best suited to fulfill our daily electricity needs. Although we all know what is windmills and how it works to generate electricity through nature wind power. Another reason, Why Ashapurna Buildcon Limited is actively working to start our windmill projects because of the geographical location of Rajasthan. Rajasthan is the state where the velocity of winds is high and that’s why these high-velocity winds are useful to move the propeller of windmill so that it can generate electricity.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    )
}
