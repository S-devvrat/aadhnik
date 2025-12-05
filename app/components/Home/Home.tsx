import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Integration from './Integration'
import ProcessSection from './ProcessSection'
import { Testimonials } from './Testimonials'
import FinalCTA from './FinalCta'
import Footer from '../Footer'
import Aadhnik from './Aadhnik'
import Solutions from './Solutions'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Solutions/>
        <Integration/>
        <ProcessSection/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home
