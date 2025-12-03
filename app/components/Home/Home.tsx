import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Stats from './Stats'
import Integration from './Integration'
import ProcessSection from './ProcessSection'
import { Testimonials } from './Testimonials'
import FinalCTA from './FinalCta'
import Footer from '../Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Stats/>
        <Integration/>
        <ProcessSection/>
        <Testimonials/>
        <FinalCTA/>
        <Footer/>
    </div>
  )
}

export default Home
