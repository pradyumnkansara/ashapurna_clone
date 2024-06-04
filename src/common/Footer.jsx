import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footlogo from '../images/ffe726b1-c8b0-4798-8c89-ebad0cb7ebf3-1673702923.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faPinterestP, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <>
      <Container fluid className='foot-first py-4'>
        <Container className='pt-2'>
          <Row>
            <Col lg={4} xs={12} className="border-lg-bottom border-info-subtle border-lg-end border-info-subtle pb-3">
              <div className='mb-3'>
                <img src={Footlogo} width="160px" height="73px" />
              </div>
              <Row className='row-cols-lg-1'>
                <Col className='d-flex align-items-center mb-3'>
                  <div className='text-white border rounded d-flex align-items-center justify-content-center p-3' style={{ fontSize: "20px", width: "38px", height: "38px" }}>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className='text-white ms-3'>
                    <a href="tel:9314041747" className='text-white'>9314041747</a>
                    <br />
                    <a href="tel:0291-2514747" className='text-white'>0291-2514747</a>
                    <a href="tel:9610383747" className='text-white'>, 9610383747</a>
                  </div>
                </Col>
                <Col className='d-flex align-items-center mb-3'>
                  <div className='text-white border rounded d-flex align-items-center justify-content-center p-3' style={{ fontSize: "20px", width: "38px", height: "38px" }}>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                  </div>
                  <div className=' ms-3'>
                    <a href="" className='text-white'>
                      marketing@ashapurna.com
                    </a>
                  </div>
                </Col>
                <Col className='d-flex align-items-center'>
                  <div className='text-white border rounded d-flex align-items-center justify-content-center p-3' style={{ fontSize: "20px", width: "38px", height: "38px" }}>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className='text-white ms-3'>
                    <a href="" className='text-white'>
                      -, 4A, EAST PATEL NAGAR, CIRCUIT HOUSE <br /> ROAD, OPPOSITE LIC OFFICE, Jodhpur, <br /> Rajasthan, 342011
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={8} xs={12} className='border-lg-bottom border-info-subtle ps-3 foot-right'>
              <Row className='row-cols-1'>
                <Col>
                  <h4 className='text-white position-relative mb-4'>Useful Links</h4>
                  <p className='d-flex align-items-center flex-wrap'>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        Residental Projects
                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        Commercial Projects
                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        Investors Club
                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        NRI Corner

                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        Career
                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        Become A Partner
                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        Our Testimonials
                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        Privacy Policy
                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        Terms & Conditions
                      </a>
                    </div>
                  </p>
                </Col>
                <Col className='mt-3'>
                  <h4 className='text-white position-relative mb-4'>Important Links</h4>
                  <p className='d-flex align-items-center flex-wrap'>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        Social Responsibility
                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        Corporate Profile
                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        Why Invest In Jodhpur?
                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        RERA Disclaimer
                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        EMI Calculator
                      </a>
                      <span className='mx-3 text-secondary'>|</span>
                    </div>
                    <div className='d-flex align-items-center foot-links'>
                      <a href="" className='text-secondary'>
                        Referral Scheme
                      </a>
                    </div>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className='py-4 d-flex flex-column align-items-center'>
            <h4 className='text-white fw-bold'>Follow us on</h4>
            <div className='d-flex mt-3'>
              <div className='bg-white rounded-circle d-flex justify-content-center align-items-center mx-1' style={{ width: "30px", height: "30px" }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className='bg-white rounded-circle d-flex justify-content-center align-items-center mx-1' style={{ width: "30px", height: "30px" }}>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className='bg-white rounded-circle d-flex justify-content-center align-items-center mx-1' style={{ width: "30px", height: "30px" }}>
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className='bg-white rounded-circle d-flex justify-content-center align-items-center mx-1' style={{ width: "30px", height: "30px" }}>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className='bg-white rounded-circle d-flex justify-content-center align-items-center mx-1' style={{ width: "30px", height: "30px" }}>
                <FontAwesomeIcon icon={faPinterestP} />
              </div>
              <div className='bg-white rounded-circle d-flex justify-content-center align-items-center mx-1' style={{ width: "30px", height: "30px" }}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </div>
          </div>
        </Container>
      </Container>
      <Container fluid className='foot-second py-5'>
        <Container>
          <div className='d-flex flex-column text-center' >
            <div className='d-flex flex-wrap justify-content-center mb-3'>
              <div className='d-flex align-items-center foot-links-2'>
                <a href="">
                  Real Estate Developer In Jodhpur
                </a>
                <span className='mx-3'>|</span>
              </div>
              <br />
              <div className='d-flex align-items-center foot-links-2'>
                <a href="">
                  Top Builders In Jodhpur
                </a>
                <span className='mx-3'>|</span>
              </div>
              <div className='d-flex align-items-center foot-links-2'>
                <a href="">
                  Top Residental Projects In Jodhpur
                </a>
                <span className='mx-3'>|</span>
              </div>
              <div className='d-flex align-items-center foot-links-2'>
                <a href="">
                  Commercial Property In Jodhpur
                </a>
                <span className='mx-3'>|</span>
              </div>
            </div>
            <div className='d-flex flex-wrap justify-content-center mb-3'>
              <div className='d-flex align-items-center foot-links-2'>
                <a href="">
                  Houses In Rajasthan
                </a>
                <span className='mx-3'>|</span>
              </div>
              <div className='d-flex align-items-center foot-links-2'>
                <a href="">
                  Flats In Jodhpur
                </a>
                <span className='mx-3'>|</span>
              </div>
              <div className='d-flex align-items-center foot-links-2'>
                <a href="">
                  Villas In Jodhpur
                </a>
                <span className='mx-3'>|</span>
              </div>
              <div className='d-flex align-items-center foot-links-2'>
                <a href="">
                  Plots In Jodhpur
                </a>
                <span className='mx-3'>|</span>
              </div>
              <div className='d-flex align-items-center foot-links-2'>
                <a href="">
                  2BHK Flats In Jodhpur
                </a>
                <span className='mx-3'>|</span>
              </div>
              <div className='d-flex align-items-center foot-links-2'>
                <a href="">
                  JDA Property In Jodhpur
                </a>
                <span className='mx-3'>|</span>
              </div>
              <div className='d-flex align-items-center foot-links-2'>
                <a href="">
                  Property Type
                </a>
                <span className='mx-3'>|</span>
              </div>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
              <div className='d-flex align-items-center foot-links-2'>
                <a href="">
                  Properties In Jodhpur
                </a>
              </div>
            </div>
          </div>
          <div className='foot-2-border'></div>
          <p className='lh-lg text-center' style={{ color: "#314b58" }}>
            The information on the website regarding the project, except the legal documents, is purely indicative and representational and do not constitute a promise by the company. Further, the Company/Architects reserve the right to add / delete any details / specifications / elevations mentioned, if so warranted.
          </p>
        </Container>
      </Container>
      <Container fluid className='foot-third py-3'>
        <Container className='d-flex justify-content-between'>
          <div>
            Copyright © 2023 Ashapurna Buildcon Limited
          </div>
          <div>
            Design and Developed by WS Cube Tech
          </div>
        </Container>
      </Container>
    </>
  )
}
