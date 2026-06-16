
import Hero from './Hero'
import Integration from './Integration'
import Testimonials from './Testimonials'
import ServiceWorker from './Bento'
import WhatWeBuild from './WhatWeBuild'
import AboutSection from './AboutSection'
import Banner from '../Banner'
import OurProducts from './OurProduct'
import Last from './Last'


const Home = () => {
  return (
    <div>
      <div className="relative">
        <Hero />
        <AboutSection />
      </div>
      <ServiceWorker />
      <Banner />
      <WhatWeBuild />
      <OurProducts />
      <Integration />
      <Testimonials />
      <Last/>
    </div>
  )
}

export default Home
