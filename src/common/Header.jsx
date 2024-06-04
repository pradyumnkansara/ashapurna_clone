import React, { useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import logo from '../images/ec33214d-e643-4f45-bbb8-50ee61b830ec-1673703981.webp'
import { Link } from 'react-router-dom'
import { faBars, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faInstagramSquare, faLinkedin, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default function Header() {
    let [mobmenu, setmobmenu] = useState(false)
    let [FaqMenu, setFaqMenu] = useState(false)
    let [FaqMenu2, setFaqMenu2] = useState(false)
    let [headstick, setheadstick] = useState(false)

    let displaymenu = () => {
        setmobmenu(!mobmenu)
    }

    let headerfixed = () => {
        if (window.scrollY >= 500) {
            setheadstick(true)
        }
        else {
            setheadstick(false)
        }
    }

    window.addEventListener("scroll", headerfixed)
    return (
        <>
            <div className={`media-menu ${mobmenu
                ?
                'menu-block'
                :
                ''
                }`} style={{ height: '100%', width: '100%', zIndex: '99999999' }}>
                <div className='d-flex align-items-center'>
                    <div>
                        <img src={logo} width="134px" />
                    </div>
                    <div className='ms-auto me-3' onClick={displaymenu} style={{ fontSize: '30px' }}>
                        &times;
                    </div>
                </div>
                <ul className='mob-menu-list mt-3 border-bottom '>
                    <li className='py-2'>
                        <a href="">
                            <Link to={'/'}>Home</Link>
                        </a>
                    </li>
                    <li className='py-2' onClick={() => setFaqMenu(!FaqMenu)}>
                        <a className='d-flex align-items-center justify-content-between'>
                            About Us
                            {
                                FaqMenu
                                    ?
                                    <FontAwesomeIcon icon={faChevronUp} className='me-3' />
                                    :
                                    <FontAwesomeIcon icon={faChevronDown} className='me-3' />
                            }
                        </a>
                        <ul className={`mob-sub-menu ${FaqMenu
                            ?
                            'mob-sub-show'
                            :
                            ''
                            }`}>
                            <li>
                                <a href="">
                                    <Link to={'/about-us'}>About-us</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={'/our-journey'}>Our Journey</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={'/management-speaks'}>Management Speaks</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={'/our-team'}>Our Team</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={'/social-responsiblity'}>CSR Social Responsibility</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={'/newsletter'}>Newsletter</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={'/nri'}>NRI Corner</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={'/why-invest-in-jodhpur'}>Why Invest in Jodhpur?</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link>Corporate Profile</Link>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='py-2' onClick={() => setFaqMenu2(!FaqMenu2)}>
                        <a className='d-flex align-items-center justify-content-between'>
                            Projects
                            {
                                FaqMenu2
                                    ?
                                    <FontAwesomeIcon icon={faChevronUp} className='me-3' />
                                    :
                                    <FontAwesomeIcon icon={faChevronDown} className='me-3' />
                            }
                        </a>
                        <ul className={`mob-sub-menu ${FaqMenu2
                            ?
                            'mob-sub-show'
                            :
                            ''
                            }`}>
                            <li>
                                <a href="">
                                    <Link to={'residential'}>Residential</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={''}>Commercial</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={'rental'}>Rental & Lease</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link>Hospitality</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link>Education</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={'/windmills'}>Windmills</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link>NRI Township</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link to={'/upcoming'}>Upcoming Projects</Link>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Link>Corporate Profile</Link>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='py-2'>
                        <a href="">
                            <Link to={'/media-events'}>Media and Events</Link>
                        </a>
                    </li>
                    <li className='py-2'>
                        <a href="">
                            <Link to={''}>Blogs</Link>
                        </a>
                    </li>
                    <li className='py-2'>
                        <a href="">
                            <Link to={'/contact'}>Contact Us</Link>
                        </a>
                    </li>
                </ul>
                <div className='border-bottom' style={{ margin: '0px 15px' }}>
                    <h6 className='text-uppercase pt-3 py-2' style={{ color: '#be8553' }}>Connect</h6>
                    <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
                        <li className='pb-2'>
                            <a href="" style={{ color: 'black' }}>
                                <span className='fw-bold'>Email:</span>
                                marketing@ashapurnagmail.com
                            </a>
                        </li>
                        <li>
                            <a href="" style={{ color: 'black' }}>
                                <span className='fw-bold'>Phone:</span>
                                9314041747
                            </a>
                        </li>
                    </ul>
                </div>
                <div style={{ margin: '0px 15px' }}>
                    <h6 className='text-uppercase pt-3 py-2' style={{ color: '#be8553' }}>social connect</h6>
                    <div className='d-flex mb-3'>
                        <div className='rounded-circle d-flex justify-content-center align-items-center text-white mx-1' style={{ backgroundColor: '#062f43', width: '30px', height: '30px' }}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className='rounded-circle d-flex justify-content-center align-items-center text-white mx-1' style={{ backgroundColor: '#062f43', width: '30px', height: '30px' }}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className='rounded-circle d-flex justify-content-center align-items-center text-white mx-1' style={{ backgroundColor: '#062f43', width: '30px', height: '30px' }}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className='rounded-circle d-flex justify-content-center align-items-center text-white mx-1' style={{ backgroundColor: '#062f43', width: '30px', height: '30px' }}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                        <div className='rounded-circle d-flex justify-content-center align-items-center text-white mx-1' style={{ backgroundColor: '#062f43', width: '30px', height: '30px' }}>
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                    <div>
                        <button className='w-100 border-0 text-white rounded py-2 fw-bold' style={{ backgroundColor: '#be8553' }}>Enquire</button>
                    </div>
                </div>
            </div>
            <Container fluid className={`shadow bg-white ${headstick
                ?
                'stickhead py-3'
                :
                ''
                }`} style={{ zIndex: '9999999999999999' }} >
                <Container className='p-0'>
                    <Row>
                        <Col lg={4} xs={5} className='position-relative'>
                            <a href="">
                                <Link><img src={logo} width="174px" className='position-absolute shadow-sm z-3 mob-logo' /></Link>
                            </a>
                        </Col>
                        <Col lg={8} xs={7}>
                            <ul className='d-flex justify-content-end align-items-center d-lg-none'>
                                <li>
                                    <FontAwesomeIcon icon={faBars} onClick={displaymenu} />
                                </li>
                            </ul>

                            <ul className='d-lg-flex justify-content-end head-list align-items-center d-none'>
                                <li>
                                    <a href="">
                                        <Link to={'/'}>Home</Link>
                                    </a>
                                </li>
                                <li className='position-relative'>
                                    <a href="">
                                        About Us
                                    </a>
                                    <ul className='sub-list text-start py-2 shadow-sm' style={{ width: "250px" }}>
                                        <li>
                                            <Link to={'/about-us'}>About-us</Link>
                                            <a href="">

                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link to={'/our-journey'}>Our Journey</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link to={'/management-speaks'}>Management Speaks</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link to={'/our-team'}>Our Team</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link to={'/social-responsiblity'}>CSR Social Responsibility</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link to={'/newsletter'}>Newsletter</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link to={'/nri'}>NRI Corner</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link to={'/why-invest-in-jodhpur'}>Why Invest in Jodhpur?</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link>Corporate Profile</Link>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className='position-relative'>
                                    <a href="">
                                        <Link to={''}>Projects</Link>
                                    </a>
                                    <ul className='sub-list text-start py-2 shadow-sm' style={{ width: "180px" }}>
                                        <li>
                                            <a href="">
                                                <Link to={'residential'}>Residential</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link to={''}>Commercial</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link to={'rental'}>Rental & Lease</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link>Hospitality</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link>Education</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link to={'/windmills'}>Windmills</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link>NRI Township</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link to={'/upcoming'}>Upcoming Projects</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Link>Corporate Profile</Link>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="">
                                        <Link to={'/media-events'}>Media and Events</Link>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Link to={''}>Blogs</Link>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Link to={'/contact'}>Contact Us</Link>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Link to=''>
                                            <button className={`text-white head-btn ${
                                                headstick
                                                ?
                                                'd-lg-none'
                                                :
                                                ''
                                            }`} style={{ width: "100px", height: "50px", backgroundColor: "#be8553", }}>Enquire</button>
                                        </Link>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
