import React from 'react'
import Header from '../common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import invest from '../images/why-invest--in-jodhpur.jpg'
import Footer from '../common/Footer'

export default function WhyInvestJodhpur() {
    return (
        <>
            <Header />
            <Container fluid className='about-ban' style={{ padding: '110px 0px' }}>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='text-white mb-2'>
                        <span className='text-uppercase' style={{ fontSize: '19px' }}>Home/Why Invest In Jodhpur

                        </span>
                    </div>
                    <h1 className='fw-bold' style={{ color: '#be8553' }}>Why Invest In Jodhpur
                    </h1>
                </div>
            </Container>
            <Container fluid className='py-5'>
                <Container>
                    <h2 className='text-center fw-bold my-2' style={{ fontSize: '35px', color: '#062F43' }}>WHY IN JODHPUR?</h2>
                    <Row className='my-5 align-items-center'>
                        <Col lg={4}>
                            <div className='border border-5 border-white rounded shadow-lg p-1'>
                                <img src={invest} className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div>
                                <h4 className='fw-bold' style={{ color: '#32343b' }}>A Quick Introduction to Jodhpur's History</h4>
                                <p style={{ color: '#5a5a5a', lineHeight: '26px' }}>
                                    Jodhpur or the Blue City of India is the second largest city of Rajasthan. The city was founded by Rao Jodha, a chief of the famous Rathore clan, way back in 1459. The city was earlier known as Marwar which later has been changed to Jodhpur to honour its founder Rao Jodha. Jodhpur is divided into two main areas- the old city and the new city.The old city is separated from the main city by a 10 km long wall that surrounds its boundary. There are eight gates to enter and exit the old city which is majorly a tourist attraction with some iconic hotspots within its parameters while the new city is a modern metropolis that surrounds the old city and houses all major developments of Jodhpur.


                                </p>
                            </div>
                        </Col>
                    </Row>
                    <h4 className='fw-bold' style={{ color: '#062f43' }}>Top 3 Reasons why Jodhpur makes an Excellent Choice for Property Investments</h4>
                    <ol>
                        <li style={{color:'#5a5a5a'}}>
                            Booming Tourism and Handicrafts Industry
                            <p>
                                Jodhpur is a very popular tourist destination which attracts thousands domestic and international tourists. The city offers scenic landscape, mesmerising heritage architecture like Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada and Rai ka Bagh Palace. Jodhpur also houses attractions like Umed Garden and an extensive government museum. On development front, the city has witnessed plenty of infrastructure development which includes hotels, restaurants and cafes. Jodhpur is also popular for its majestic destination weddings and booming handicraft industry. All aspects of development make property in Jodhpur a logical and popular choice for real estate investment to fetch big returns in the times to come.
                            </p>
                        </li>
                        <li style={{color:'#5a5a5a'}}>
                            Booming Tourism and Handicrafts Industry
                            <p>
                                Jodhpur is a very popular tourist destination which attracts thousands domestic and international tourists. The city offers scenic landscape, mesmerising heritage architecture like Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada and Rai ka Bagh Palace. Jodhpur also houses attractions like Umed Garden and an extensive government museum. On development front, the city has witnessed plenty of infrastructure development which includes hotels, restaurants and cafes. Jodhpur is also popular for its majestic destination weddings and booming handicraft industry. All aspects of development make property in Jodhpur a logical and popular choice for real estate investment to fetch big returns in the times to come.
                            </p>
                        </li>
                        <li style={{color:'#5a5a5a'}}>
                            Booming Tourism and Handicrafts Industry
                            <p>
                                Jodhpur is a very popular tourist destination which attracts thousands domestic and international tourists. The city offers scenic landscape, mesmerising heritage architecture like Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada and Rai ka Bagh Palace. Jodhpur also houses attractions like Umed Garden and an extensive government museum. On development front, the city has witnessed plenty of infrastructure development which includes hotels, restaurants and cafes. Jodhpur is also popular for its majestic destination weddings and booming handicraft industry. All aspects of development make property in Jodhpur a logical and popular choice for real estate investment to fetch big returns in the times to come.
                            </p>
                        </li>
                            
                    </ol>
                </Container>
            </Container>
            <Footer/>
        </>
    )
}
