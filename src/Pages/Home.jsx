import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import slide1 from '../images/best-township-in-jodhpur-ashapurna-heritage-1681632001.webp';
import slide2 from '../images/26_YEARS_BANNER-1681734765.webp';
import slide3 from '../images/ashapurna-nri-luxury-villas-in-jodhpur-1681465456.webp';
import slide4 from '../images/budget-villas-for-sale-in-jodhpur-ashapurna-anmol-1680947635.webp';
import slide5 from '../images/budget-flats-for-sale-in-jodhpur-ashapurna-basera-1681652503.webp';
import slide6 from '../images/luxury-apartment-ready-for-sale-in-jodhpur-1681645330.webp';
import aboutimg from '../images/aboutus.webp';
import experience from '../images/experience-check.png';
import property from '../images/property.svg';
import happy from '../images/happy.png';
import measuringtape from '../images/measuring-tape.png';
import units from '../images/units.png';
import nri from '../images/ashapurna-nri-home-page-image-1676441428.webp';
import nriheadimg from '../images/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp';
import rera from '../images/rera.webp';
import heritage from '../images/ashapurna-heritage-project-banner-1677493280.webp'
import headheritage from '../images/ashapurna-heritage-logo-1677495446.webp'
import kundanvilla from '../images/ashapurna-kundan-villa-coming-soon-1681986511.webp'
import headvilla from '../images/ashapurna-kundan-villa-3-bhk-villa-in-jodhpur-logo-1679382577.webp'
import pachpadra from '../images/ashapurna-pachpadra-township-gate-1677494062.webp'
import headpach from '../images/ashapurna-township-pachpadra-logo-1677495132.webp'
import home from '../images/356b3cc2-741e-4c46-920d-7b0ab40eb1df-1669190319.svg'
import aangan from '../images/ashapurna-aangan-budget-house-in-jodhpur-1682079322.webp'
import aaganlogo from '../images/ashapurna-aangan-logo-1677495610.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHome, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Usha from '../images/aasaa-1681650821.webp';
import quotes from '../images/quotes.png';
import media1 from '../images/event-thumbnail-1698994445.webp'
import Footer from '../common/Footer';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import axios from 'axios';
import { BaseUrl } from '../API/DataApi';


export default function Home() {
    let [sliderpath, setsliderpath] = useState('')
    let [sliderdata, setsliderdata] = useState([])
    let [aboutpath, setaboutpath] = useState('')
    let [aboutdata, setaboutdata] = useState({})
    let [featurepath, setfeaturepath] = useState('')
    let [amenitiespath, setamenitiespath] = useState('')
    let [featuredata, setfeaturedata] = useState([])
    let [whypath, setwhypath] = useState('')
    let [whydata, setwhydata] = useState([])
    let [projectdata, setprojectdata] = useState([])
    let [testinomialpath, settestinomialpath] = useState('')
    let [testinomialdata, settestinomialdata] = useState([])
    let [utsavpath, setutsavpath] = useState('')
    let [utsavdata, setutsavdata] = useState([])
    let [alldata, setalldata] = useState({})
    let [allpath, setallpath] = useState('')
    let homeapi = () => {
        axios.post(BaseUrl + 'home')
            .then((res) => res.data)
            .then((finalres) => {
                let finalpath = finalres._data
                // slider data
                setsliderpath(finalpath.slider_image_path)
                setsliderdata(finalpath.getSliders)
                // about data
                setaboutpath(finalpath.about_us_image_path)
                setaboutdata(finalpath.aboutUs)
                // feature project
                setfeaturepath(finalpath.project_image_path)
                setamenitiespath(finalpath.amenities_image_path)
                setfeaturedata(finalpath.getFeaturedProjects)
                // why us
                setwhypath(finalpath.why_choose_us_image_path)
                setwhydata(finalpath.getWhyChooseUs)
                // Project overeviw
                setprojectdata(finalpath.getProjects)
                // our testinomial
                settestinomialpath(finalpath.testimonial_image_path)
                settestinomialdata(finalpath.getTestimonials)
                // utsav camp
                setutsavpath(finalpath.utsav_camps_image_path)
                setutsavdata(finalpath.getUtsavCamps)
                // alldata
                setalldata(finalpath.getHomePage)
                setallpath(finalpath.home_page_image_path)
            })
    }
    useEffect(() => {
        homeapi();
    }, [])
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };

    var slides = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    var review = {
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    infinite: true,
                }
            }
        ]
    };

    var whyslide = {
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

    var divslide = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false
    };

    var mediaslider = {
        dots: true,
        infinite: true,
        speed: 2000,
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
    }

    let [counter, setcounter] = useState(false);
    return (
        <>
            <Header />
            <Container fluid className='home-ban'>
                <Container>
                    <Slider {...settings}>
                        {
                            sliderdata.length >= 1
                                ?
                                sliderdata.map((v, i) => {
                                    return (
                                        <div>
                                            <img src={sliderpath + v.image} className='img-fluid' />
                                        </div>
                                    )
                                })
                                :
                                ''
                        }
                    </Slider>
                </Container>
            </Container>
            <Container fluid className='d-none d-lg-block'>
                <Container>
                    <form className='row row-cols-6 bg-white shadow-lg p-3 ban-form'>
                        <div>
                            <input type="text" placeholder='Name' className='py-3 ps-2 container-fluid rounded-1' />
                        </div>
                        <div>
                            <input type="text" placeholder='Email' className='py-3 ps-2 container-fluid rounded-1' />
                        </div>
                        <div>
                            <input type="text" placeholder='Phone' className='py-3 ps-2 container-fluid rounded-1' />
                        </div>
                        <div>
                            <select name="" id="" className='py-3 ps-2 container-fluid rounded-1 ban-select'>
                                <option className=''>Select Value</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" placeholder='Explain Your Querry' className='py-3 ps-2 container-fluid text-black rounded-1' />
                        </div>
                        <div>
                            <button className='py-3 px-2 container-fluid ban-form-btn rounded-1'>Submit</button>
                        </div>
                    </form>
                </Container>
            </Container>
            <Container fluid>
                <Container className='py-5 about-rev'>
                    <Row className='pt-5 position-relative'>
                        {
                            aboutdata !== null
                                ?
                                <>
                                    <Col lg={5}>
                                        <div>
                                            <img src={aboutpath + aboutdata.homepage_image} className='img-fluid' />
                                        </div>
                                    </Col>
                                    <Col lg={7} className='mt-3'>
                                        <div>
                                            <p className='text-uppercase sect-head-sub position-relative mb-0'>{aboutdata.homepage_title}</p>
                                            <h1 className='sect-head my-2 fw-bold'>{aboutdata.homepage_tagline}</h1>
                                            <div className='sect-para'>
                                                <div dangerouslySetInnerHTML={{ __html: aboutdata.homepage_description }}></div>

                                                {/* <p>Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.</p>
                                                <p>
                                                    In a relatively short period of time, Ashapurna has grown and gained a trustworthy real estate name in the entire Rajasthan. The company always tried hard to deliver everything best to its customers and built all their categories-Luxury, Mix segments, and affordable homes.
                                                </p> */}
                                            </div>
                                            <div className='about-features p-4 end-0' style={{ position: 'absolute' }}>
                                                <ScrollTrigger onEnter={() => setcounter(true)} onExit={() => setcounter(false)}>
                                                    <Slider {...review}>
                                                        <Col>
                                                            <div>
                                                                <div className='text-center'>
                                                                    <div className='bg-white text-center py-3 mx-5 rounded-1'>
                                                                        <img src={allpath + alldata.about_years_experience_image} width="42px" className='mx-auto' />
                                                                    </div>
                                                                    <div className='about-inn'>
                                                                        <h4 className='fw-bold my-2'>{counter && <CountUp start={0} end={alldata.about_years_experience_value} duration={2} delay={0} />}+</h4>
                                                                        <p className='mb-0'>{alldata.about_years_experience_title}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div>
                                                                <div className='text-center'>
                                                                    <div className='bg-white text-center py-3 mx-5 rounded-1'>
                                                                        <img src={allpath + alldata.about_delivered_image} width="42px" className='mx-auto' />
                                                                    </div>
                                                                    <div className='about-inn'>
                                                                        <h4 className='fw-bold my-2'>{counter && <CountUp start={0} end={alldata.about_delivered_value} duration={2} delay={0} />}+</h4>
                                                                        <p className='mb-0'>{alldata.about_delivered_title}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div>
                                                                <div className='text-center'>
                                                                    <div className='bg-white text-center py-3 mx-5 rounded-1'>
                                                                        <img src={allpath + alldata.about_project_completed_image} width="42px" className='mx-auto' />
                                                                    </div>
                                                                    <div className='about-inn'>
                                                                        <h4 className='fw-bold my-2'>{counter && <CountUp start={0} end={alldata.about_project_completed_value} duration={2} delay={0} />}+</h4>
                                                                        <p className='mb-0'>{alldata.about_project_completed_title}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div>
                                                                <div className='text-center'>
                                                                    <div className='bg-white text-center py-3 mx-5 rounded-1'>
                                                                        <img src={allpath + alldata.about_happy_families_image} width="42px" className='mx-auto' />
                                                                    </div>
                                                                    <div className='about-inn'>
                                                                        <h4 className='fw-bold my-2'>{counter && <CountUp start={0} end={alldata.about_happy_families_value} duration={2} delay={0} />}+</h4>
                                                                        <p className='mb-0'>{alldata.about_happy_families_title}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <div>
                                                                <div className='text-center'>
                                                                    <div className='bg-white text-center py-3 mx-5 rounded-1'>
                                                                        <img src={allpath + alldata.about_units_image} width="42px" className='mx-auto' />
                                                                    </div>
                                                                    <div className='about-inn'>
                                                                        <h4 className='fw-bold my-2'>{counter && <CountUp start={0} end={alldata.about_units_value} duration={2} delay={0} />}+</h4>
                                                                        <p className='mb-0'>{alldata.about_units_title}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Slider>
                                                </ScrollTrigger>
                                            </div>
                                        </div>
                                    </Col>
                                </>
                                :
                                ''
                        }

                    </Row>
                </Container>
            </Container>
            <Container fluid className='why-us pt-5'>
                <Container className='pt-5'>
                    <Row>
                        <Col lg={4} xs={12}>
                            <div className='mt-5 pt-4   '>
                                <p className='text-uppercase sect-head-sub position-relative mb-0'>{alldata.why_us_title}</p>
                                <h2 className='sect-head my-2 fw-bold'>{alldata.why_us_tagline}</h2>
                                <div className='sect-para'>
                                    <p>
                                        {alldata.why_us_description}
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} xs={12}>
                            <div>
                                <Row className='gy-4 d-none d-lg-flex'>
                                    {
                                        whydata.map((v, i) => {
                                            return (

                                                <Col lg={6}>
                                                    <div className='shadow-lg bg-white p-4 rounded-top-3 why-right position-relative mx-2'>
                                                        <div className='mt-2'>
                                                            <img src={whypath + v.image} width="60px" />
                                                        </div>
                                                        <h4 className='fw-bold py-3'>{v.title}</h4>
                                                        <div className='my-3 mb-4'>
                                                            <p>
                                                                {v.short_description.slice(0, 90)}... <span>Read More</span>
                                                            </p>
                                                        </div>
                                                        <div className='why-block position-absolute'></div>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                                <Row className='gy-4 d-block d-lg-none'>
                                    <Slider {...whyslide}>
                                        {
                                            whydata.map((v, i) => {
                                                return (
                                                    <Col>
                                                        <div className='shadow bg-white p-4 rounded-top-3 why-right position-relative mx-2'>
                                                            <div className='mt-2'>
                                                                <img src={whypath + v.image} width="60px" />
                                                            </div>
                                                            <h4 className='fw-bold py-3'>{v.title}</h4>
                                                            <div className='my-3 mb-4'>
                                                                <p>
                                                                    {v.short_description.slice(0, 90)}... <span>Read More</span>
                                                                </p>
                                                            </div>
                                                            <div className='why-block position-absolute'></div>
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Slider>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='our-work'>
                <Container className='py-5'>
                    <p className='text-uppercase sect-head-sub position-relative mb-0'>{alldata.our_work_title}</p>
                    <h2 className='sect-head my-2 fw-bold text-white mb-3'>{alldata.our_work_tagline}</h2>
                    <Slider {...slides}>
                        {
                            featuredata.map((v, i) => {
                                return (
                                    <div>
                                        <Row className>
                                            <Col lg={6} xs={12}>
                                                <div>
                                                    <img src={featurepath + v.homepage_image} className='img-fluid' />
                                                </div>
                                            </Col>
                                            <Col lg={6} xs={12}>
                                                <div className='text-white'>
                                                    <h3 className='d-flex align-items-center py-4 py-lg-0'>
                                                        <div className='me-2'>
                                                            <img src={featurepath + v.project_logo_2} width="50px" />
                                                        </div>
                                                        <div className='our-link'>
                                                            <a href="">
                                                                Ashapurna NRI
                                                            </a>
                                                        </div>
                                                    </h3>
                                                    <p className='my-2'>
                                                        {v.short_description}
                                                    </p>
                                                    <div className='mt-3'>
                                                        <Row className='justify-content-between'>
                                                            {
                                                                v.amenities.slice(0, 3).map((value, index) => {
                                                                    return (
                                                                        <Col lg={4} xs={6}>
                                                                            <div className='d-flex align-items-center'>
                                                                                <div className='me-2'>
                                                                                    <img src={amenitiespath + value.image} width="40px" />
                                                                                </div>
                                                                                <div className='d-flex flex-column justify-content-between facility-box'>
                                                                                    <h6 className='text-uppercase'>{value.title}</h6>
                                                                                    <p className='text-uppercase'>{value.sub_title}</p>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                    )
                                                                })
                                                            }
                                                            <div className='mt-3'>
                                                                <button className='rounded-1 px-3 py-2 our-btn'>See All</button>
                                                            </div>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </Container>
            </Container>
            <Container fluid className='project-overeview py-5'>
                <Container>
                    <p className='text-uppercase sect-head-sub position-relative mb-0'>{alldata.project_overview_title}</p>
                    <h2 className='sect-head my-2 fw-bold'>{alldata.project_overview_tagline}</h2>
                    <p className='sect-para mb-5'>
                        {alldata.project_overview_description}
                    </p>
                    {/* <Row className='justify-content-between mt-5'> */}
                        <Slider {...projslides}>
                            {
                                projectdata.map((v, i) => {
                                    return (
                                        <Col lg={4} xs={12}>
                                            <div className='mx-3 mb-5'>
                                                <div className='prj-border position-relative shadow rounded'>
                                                    <img src={featurepath + v.project_logo_1} className='img-fluid' />
                                                    <div className='bg-white sub-proj rounded mx-auto px-3 shadow-sm'>
                                                        <div className='d-flex align-items-center'>
                                                            <div>
                                                                <img src={featurepath + v.project_logo_2} width="80px" />
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
                                                                    {v.address}
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
                    {/* </Row> */}
                </Container>
            </Container>
            <Container fluid className='py-lg-5 our-testinomial'>
                <Container className='pb-4'>
                    <Row className='justify-content-between pt-5 align-items-center'>
                        <Col lg={4} xs={12}>
                            <div className='mt-4'>
                                <p className='text-uppercase sect-head-sub position-relative mb-0'>{alldata.our_testimonial_title}</p>
                                <h2 className='sect-head my-2 fw-bold text-white mb-4'>{alldata.our_testimonial_tagline}</h2>
                                <div className='sect-para'>
                                    <p className='text-white'>{alldata.our_testimonial_description}</p>
                                </div>
                                <button className='test-btn my-3'>
                                    See All
                                </button>
                            </div>
                        </Col>
                        <Col lg={7} xs={12}>
                            <div>
                                <Slider {...divslide}>
                                    {
                                        testinomialdata.map((v, i) => {
                                            return (
                                                <div className='bg-white p-4 position-relative testinomial-right pb-5 mb-3' >
                                                    <div className='d-flex justify-content-center mb-5'>
                                                        <div className='d-flex justify-content-center align-items-center test-border-out rounded-circle position-lg-absolute'>
                                                            <div className='test-border-inn rounded-circle d-flex justify-content-center align-items-center'>
                                                                <img src={testinomialpath + v.image} className='rounded-circle' width="187px" height="187px" />
                                                            </div>
                                                        </div>
                                                        <div className='ms-3'>
                                                            <h5 className='test-name'>{v.name}</h5>
                                                            <div className='test-name-sub'>
                                                                {v.position}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className=''>
                                                        {v.message}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='py-5 media-event'>
                <Container className='pb-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2 className='fw-bold'>Media And Event</h2>
                        <div>
                            <button className='media-btn'>See All</button>
                        </div>
                    </div>
                        <Slider {...mediaslider} className='py-4'>
                            {
                                utsavdata.length >= 1
                                    ?
                                    utsavdata.map((v, i) => {
                                        return (
                                            <Col lg={4} xs={12}>
                                                <div className='shadow-sm mx-2 rounded-bottom mb-3'>
                                                    <div>
                                                        <img src={utsavpath + v.image} className='img-fluid' />
                                                    </div>
                                                    <div className='p-3'>
                                                        <h6 className='media-head'>
                                                            <a href="">
                                                                {v.title}
                                                            </a>
                                                        </h6>
                                                        <div className='d-flex align-item-center'>
                                                            <div className='me-2 media-icon'>
                                                                <FontAwesomeIcon icon={faLocationDot} />
                                                            </div>
                                                            <div className='media-icon-head'>
                                                                <span>{v.location}</span>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-item-center'>
                                                            <div className='me-2 media-icon'>
                                                                <FontAwesomeIcon icon={faClock} />
                                                            </div>
                                                            <div className='media-icon-head'>
                                                                <span>{v.date}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                    :
                                    ''
                            }
                        </Slider>
                </Container>
            </Container>
            <Footer />
        </>
    )
}
