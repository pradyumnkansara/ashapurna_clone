import React from 'react'
import Header from '../common/Header'
import { Container } from 'react-bootstrap'
import team_chart from '../images/organization-chart3.jpg'
import Footer from '../common/Footer'

export default function Team() {
    return (
        <>
            <Header />
            <Container fluid className='about-ban' style={{ padding: '110px 0px' }}>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='text-white mb-2'>
                        <span className='text-uppercase' style={{ fontSize: '19px' }}>Home/Our Team</span>
                    </div>
                    <h1 className='fw-bold' style={{ color: '#be8553' }}>Our Team</h1>
                </div>
            </Container>
            <Container fluid className='py-5'>
                <Container>
                    <h2 className='text-center fw-bold mb-5' style={{ fontSize: '40px', color: '#062F43' }}>Ashapurna Team</h2>
                    <p className='mb-5'>
                        Shri Karan Singh Uchiyarda, the Founder Chairman & Managing Director of Ashapurna Buildcon, is a man with crystal-clear foresight and strong business acumen. It is his vision that led the company to scale new heights and set new benchmarks of excellence in Jodhpur's real estate scene. Acceptance and popularity of Ashapurna's projects are proof of his passion, skill, and hard work. Besides real estate, Shri Karan Singh Uchiyarda is a known figure in the hospitality sector as well.
                    </p>
                    <p>
                        On one hand, Shri Karan Singh Uchiyarda is a respected name in the Jodhpur's business circle, on the other, he is known for giving back to society through his trust Shree Mag Mohan Charitable Trust. His social welfare work includes medical camps, large-scale marriage functions, housing, and other donation for the poor and needy. What's more, in a very unique and commendable CSR initiative, Ashapurna Buildcon provides a free home to a widow in every project which in itself is living proof of Shri Karan Singh Uchiyardas concern towards the less privileged section of society.
                    </p>
                    <div>
                        <img src={team_chart} className='img-fluid'/>
                    </div>
                </Container>
            </Container>
            <Footer/>
        </>
    )
}
