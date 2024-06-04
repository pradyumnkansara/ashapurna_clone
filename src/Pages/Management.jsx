import React from 'react'
import Header from '../common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import karan from '../images/6e449cbb-2eb8-4888-b0d6-bd7d77d8f039-1669299130.jpg'
import Footer from '../common/Footer'

export default function Management() {
    return (
        <>
            <Header />
            <Container fluid className='about-ban' style={{ padding: '110px 0px' }}>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='text-white mb-2'>
                        <span className='text-uppercase' style={{ fontSize: '19px' }}>Home/Our Management
                        </span>
                    </div>
                    <h1 className='fw-bold' style={{ color: '#be8553' }}>Our Management
                    </h1>
                </div>
            </Container>
            <Container fluid className='py-5'>
                <Container>
                    <h2 className='text-center fw-bold my-4' style={{ fontSize: '40px', color: '#062F43' }}>Board Of Directors</h2>
                    <p className='mb-5' style={{ color: '#5a5a5a', textAlign: 'justify' }}>
                        Ashapurna Group is a socially responsible company. The group is active in almost all spheres of society and works on the ground level to bring about meaningful change. Ashapurna has worked in the fields of health, education, social awareness, and environment. During the challenging time of Covid, the group has worked hand in hand with government and non-government agencies. Ashapurna understands its responsibility and always strives hard to be with society in times of need.
                    </p>
                    <Row className='my-5 align-items-center'>
                        <Col lg={8}>
                            <div className='p-4' style={{ backgroundColor: '#f4efeb' }}>
                                <p className='text-uppercase sect-manage-sub position-relative mb-0'>CMD</p>
                                <h3 className='fw-bold' style={{ color: '#062f4e' }}>Shri Karan Singh Uchiyarda</h3>
                                <p style={{color:'#5a5a5a'}}>
                                    Ashapurna Buildcon Ltd. was envisaged and founded by Shri Karan Singh Uchiyarda a visionary with crystal clear foresight and blessed with a strong sense of business acumen. Karan Singh Uchiyarda is a practical man and with his sharp visualization has set forth an enviable legacy. “There is a certain divinity that shapes all ends”. His past projects have all been very well accepted. Every project speaks the shining story itself. The mission statement of the company is “WHERE DREAMS MEET REALITY”.. Ashapurna always tries for the best quality housing at a minimum and reasonable cost which otherwise may not be possible if a customer builds his own house. Shri Karan Singh Uchiyarda with his..
                                </p>
                                {/* <p>
                                zeal and enthusiasm to work for the social upliftment of poor people has established a trust named ‘Shree Mag Mohan Charitable Trust’, which, with the association of Ashapurna Buildcon Ltd. works for the welfare of the general public by organizing medical camps, social events like large scale marriage functions, housing and other donations to poor and needy people, charitable activities etc. Ashapurna has the best talents on its staff rolls. It also has its self-integrated modern state-of-art infrastructure to support the manpower. Highly skilled intelligent architects have to date produced real wonders; their scintillating and stunning designs have captivated and awed many people in Rajasthan. Ashapurna has redefined the Building and Construction Business with unique modern designs and preserving the rich heritage and the traditional and cultural values of India. It is obvious to conclude that the group has in its humble way tried to enrich the quality of life and living standards of the people in general. For customers, Ashapurna Constructs has a wide range of requirements and offers the best suitable options.
                                </p> */}
                                <div>
                                    <button className='manage-btn'>Read More</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='rounded-circle' style={{backgroundColor:'#062f43'}}>
                                <img src={karan} className='rounded-circle p-3' style={{width:'100%',height:'100%'}} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-5 align-items-center flex-row-reverse'>
                        <Col lg={8}>
                            <div className='p-4' style={{ backgroundColor: '#f4efeb' }}>
                                <p className='text-uppercase sect-manage-sub position-relative mb-0'>CMD</p>
                                <h3 className='fw-bold' style={{ color: '#062f4e' }}>Shri Karan Singh Uchiyarda</h3>
                                <p style={{color:'#5a5a5a'}}>
                                    Ashapurna Buildcon Ltd. was envisaged and founded by Shri Karan Singh Uchiyarda a visionary with crystal clear foresight and blessed with a strong sense of business acumen. Karan Singh Uchiyarda is a practical man and with his sharp visualization has set forth an enviable legacy. “There is a certain divinity that shapes all ends”. His past projects have all been very well accepted. Every project speaks the shining story itself. The mission statement of the company is “WHERE DREAMS MEET REALITY”.. Ashapurna always tries for the best quality housing at a minimum and reasonable cost which otherwise may not be possible if a customer builds his own house. Shri Karan Singh Uchiyarda with his..
                                </p>
                                {/* <p>
                                zeal and enthusiasm to work for the social upliftment of poor people has established a trust named ‘Shree Mag Mohan Charitable Trust’, which, with the association of Ashapurna Buildcon Ltd. works for the welfare of the general public by organizing medical camps, social events like large scale marriage functions, housing and other donations to poor and needy people, charitable activities etc. Ashapurna has the best talents on its staff rolls. It also has its self-integrated modern state-of-art infrastructure to support the manpower. Highly skilled intelligent architects have to date produced real wonders; their scintillating and stunning designs have captivated and awed many people in Rajasthan. Ashapurna has redefined the Building and Construction Business with unique modern designs and preserving the rich heritage and the traditional and cultural values of India. It is obvious to conclude that the group has in its humble way tried to enrich the quality of life and living standards of the people in general. For customers, Ashapurna Constructs has a wide range of requirements and offers the best suitable options.
                                </p> */}
                                <div>
                                    <button className='manage-btn'>Read More</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='rounded-circle' style={{backgroundColor:'#062f43'}}>
                                <img src={karan} className='rounded-circle p-3' style={{width:'100%',height:'100%'}} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer/>
        </>
    )
}
