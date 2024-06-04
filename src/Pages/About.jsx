import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import buildcol from '../images/ashapurna-buildcon-corporate-office-1681628091.webp'
import exp from '../images/experience-check.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import aangan from '../images/ashapurna-aangan-budget-house-in-jodhpur-1682079322.webp'
import aaganlogo from '../images/ashapurna-aangan-logo-1677495610.webp'
import Slider from 'react-slick'
import vision from '../images/ourvision.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import axios from 'axios'
import { BaseUrl } from '../API/DataApi'



export default function About() {
    let [aboutdata, setaboutdata] = useState({})
    let [aboutpath, setaboutpath] = useState('')
    let [areapath, setareapath] = useState('')
    let [areadata, setareadata] = useState([])

    let aboutapi = () => {
        axios.post(BaseUrl + 'about-us')
            .then((res) => res.data)
            .then((finalres) => {
                let finaldata = finalres._data
                // about us
                setaboutpath(finaldata.about_us_image_path)
                setaboutdata(finaldata.aboutUs)
                // area we serve
                setareapath(finaldata.project_image_path)
                setareadata(finaldata.areaWeServes)
            })
    }

    useEffect(() => {
        aboutapi()
    }, [])

    var projslides = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                }
            }
        ]
    };
    let [count, setcount] = useState(false);
    return (
        <>
            <Header />
            <Container fluid className='about-ban' style={{ padding: '110px 0px' }}>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='text-white mb-2'>
                        <span className='text-uppercase' style={{ fontSize: '19px' }}>Home/About us</span>
                    </div>
                    <h1 className='fw-bold' style={{ color: '#be8553' }}>About Us</h1>
                </div>
            </Container>
            <Container fluid className='py-5'>
                <Container className='pt-5'>
                    <Row>
                        <Col xs={12} lg={6}>
                            <div>
                                <img src={aboutpath + aboutdata.image} className='img-fluid' />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div>
                                <p className='text-uppercase sect-head-sub position-relative mb-0'>{aboutdata.title}</p>
                                <h2 className='sect-head my-2 fw-bold'>Welcome to Ashapurna</h2>
                                <div className='sect-para'>
                                    {/* <p>Ashapurna Buildcon started its journey in 1996 as a private limited company and turned into a limited company after just one year. Ashapurna became the first ISO 9001:2000 certified company in western Rajasthan in 2004. The company’s first offering was a project of 400 villas/plots that came in 1997 and was completed within a record time of 18 months which eventually became a norm in many upcoming projects. In its existence of 27 years, Ashapurna Buildcon has 40 projects and has delivered 36 projects spanning 75,00,000 square feet, housing more than 25,000 smiling and satisfied faces.

                                    </p>
                                    <p>Under the able leadership of Shri Karan Singh Uchiyarda, Ashapurna Buildcon has spread its wings across top residential projects in Jodhpur, hospitality, education, and entertainment domains, and commercial property in Jodhpur. Shri Karan Singh Uchiyarda gave ‘Comforts Residency Palace’, a renowned 3-star hotel, to Jodhpur, Hotel Ashapurna to Jaipur and another 5-star resort-cum-hotel is coming up at Uchiyarda. In education, the company owns and runs an architecture institute named ‘Buddha Institute’ in Udaipur. In the past few years, Ashapurna Buildcon has proven itself to the Real Estate market of Rajasthan and conveyed itself as one of the <span style={{ color: '#be8553' }}>Top 10 Real Estate Companies in Rajasthan</span>. In its quest to take the idea of lifestyle to the next level, Ashapurna Buildcon has launched premium budget homes that perfectly blend style and practicality. 

                                    </p>*/}
                                    <div dangerouslySetInnerHTML={{ __html: aboutdata.description }}></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='py-5'>
                <Container className='review-sect py-5'>
                    <ScrollTrigger onEnter={() => setcount(true)} onExit={() => setcount(false)}>
                        <Row>
                            <Col xs={6} lg={3}>
                                <div className='text-center'>
                                    <div className='text-center '>
                                        <img src={aboutpath + aboutdata.year_of_experience_image} width='84px' className='bg-white p-3 rounded' />

                                    </div>
                                    <h3 className='mt-3 fw-bold' style={{ color: '#be8553' }}>{count && <CountUp start={0} end={aboutdata.year_of_experience} duration={2} delay={0} />}+</h3>
                                    <p className='pb-0 fw-medium text-white'>{aboutdata.year_of_experience_heading}</p>
                                </div>
                            </Col>
                            <Col xs={6} lg={3}>
                                <div className='text-center'>
                                    <div className='text-center '>
                                        <img src={aboutpath + aboutdata.project_completed_image} width='84px' className='bg-white p-3 rounded' />

                                    </div>
                                    <h3 className='mt-3 fw-bold' style={{ color: '#be8553' }}>{count && <CountUp start={0} end={aboutdata.project_completed} duration={2} delay={0} />}+</h3>
                                    <p className='pb-0 fw-medium text-white'>{aboutdata.project_completed_heading}</p>
                                </div>
                            </Col>
                            <Col xs={6} lg={3}>
                                <div className='text-center'>
                                    <div className='text-center '>
                                        <img src={aboutpath + aboutdata.villas_completed_image} className='bg-white p-3 rounded' width='84px' />

                                    </div>
                                    <h3 className='mt-3 fw-bold' style={{ color: '#be8553' }}>{count && <CountUp start={0} end={aboutdata.villas_completed} duration={2} delay={0} />}+</h3>
                                    <p className='pb-0 fw-medium text-white'>{aboutdata.villas_completed_heading}</p>
                                </div>
                            </Col>
                            <Col xs={6} lg={3}>
                                <div className='text-center'>
                                    <div className='text-center '>
                                        <img src={aboutpath + aboutdata.plots_hand_over_image} className='bg-white p-3 rounded' width='84px' />

                                    </div>
                                    <h3 className='mt-3 fw-bold' style={{ color: '#be8553' }}>{count && <CountUp start={0} end={aboutdata.plots_hand_over} duration={2} delay={0} />}+</h3>
                                    <p className='pb-0 fw-medium text-white'>{aboutdata.plots_hand_over_heading}</p>
                                </div>
                            </Col>
                        </Row>
                    </ScrollTrigger>
                </Container>
            </Container>
            <Container fluid className='py-4 feature-sect'>
                <Container>
                    <h2 className='fw-bold text-center' style={{ color: '#062f43' }}>Feature Projects</h2>
                        <Slider {...projslides} className='mt-5'>
                            {
                                areadata.map((v, i) => {
                                    return (
                                        <Col lg={4}>
                                            <div className='mx-3 mb-5'>
                                                <div className='prj-border position-relative shadow rounded'>
                                                    <img src={areapath + v.project_logo_1} className='img-fluid' />
                                                    <div className='bg-white sub-proj rounded mx-auto px-3 shadow-sm'>
                                                        <div className='d-flex align-items-center'>
                                                            <div>
                                                                <img src={areapath + v.project_logo_2} height="60px" />
                                                            </div>
                                                            <h5>
                                                                <a href="">
                                                                    {v.name}
                                                                </a>
                                                            </h5>
                                                        </div>
                                                        <div className='d-flex sub-proj-bottom'>
                                                            <div>
                                                                <FontAwesomeIcon icon={faLocationDot} />
                                                            </div>
                                                            <div>
                                                                <p className='ms-2 mb-0'>
                                                                    {v.address.slice(0, 35)}...
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
                                                                        {v.current_status}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <button className='proj-btn text-white border-0 p-2 rounded'>See All</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='prj-tag text-white rounded position-absolute p-2'>
                                                        {v.current_status}
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Slider>
                </Container>
            </Container>
            <Container fluid className='mt-5 mission py-5'>
                <Container className=''>
                    <Row className='align-items-center gy-3'>
                        <Col xs={12} lg={6}>
                            <div className='bg-white shadow-lg'>
                                <Row>
                                    <Col xs={12} lg={4}>
                                        <div className='text-center'>
                                            <img src={aboutpath + aboutdata.our_mission_image} className='ps-1' />
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={8}>
                                        <div className='p-4'>
                                            <h4 className='fw-bold position-relative'>{aboutdata.our_mission_title}</h4>
                                            <p className='my-4' style={{ color: '#5a5a5a', fontSize: '14px' }}>

                                                <div dangerouslySetInnerHTML={{ __html: aboutdata.our_mission_description }}></div>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className='bg-white shadow-lg'>
                                <Row>
                                    <Col xs={12} lg={4}>
                                        <div className='text-center'>
                                            <img src={vision} className='ps-1' />
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={8}>
                                        <div className='p-4'>
                                            <h4 className='fw-bold position-relative'>{aboutdata.our_vision_title}</h4>
                                            <p className='my-4' style={{ color: '#5a5a5a', fontSize: '14px' }}>

                                                <div dangerouslySetInnerHTML={{ __html: aboutdata.our_vision_description }}></div>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='achivement mb-5'>
                <Container className='py-5'>
                    <Row className='justify-content-end mt-5'>
                        <Col xs={12} lg={8}>
                            <div className='p-4 bg-white achivement-box shadow'>
                                <h3 className='fw-bold mb-3'>{aboutdata.our_achievement_title}</h3>
                                <div style={{ color: '#5a5a5a', fontSize: '14px', lineHeight: '26px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: aboutdata.our_achievement_description }}></div>
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
