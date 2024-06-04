import React from 'react'
import Header from '../common/Header'
import { Container } from 'react-bootstrap'
import proj from '../images/upcoming-projects.jpg'
import Footer from '../common/Footer'

export default function Upcoming() {
  return (
    <>
      <Header />
      <Container fluid className='about-ban' style={{ padding: '110px 0px' }}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className='text-white mb-2'>
            <span className='text-uppercase' style={{ fontSize: '19px' }}>Home/Upcoming Projects
            </span>
          </div>
          <h1 className='fw-bold' style={{ color: '#be8553' }}>Upcoming Projects
          </h1>
        </div>
      </Container>
      <Container fluid>
        <Container>
          <h2 className='text-center fw-bold my-5' style={{ fontSize: '40px', color: '#062F43' }}>Rental & Lease Projects</h2>
          <div className='pb-5'>
            <img src={proj} className='img-fluid' />
          </div>
        </Container>
      </Container>
      <Footer />
    </>
  )
}
