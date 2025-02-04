import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import AboutHero from './AboutHero'
import AboutBody from './AboutBody'
import Faqsection from '../FaqSection'
import GetinTouchSection from '../GetInTouchSection'

const page = () => {
  return (
    <div>
      <Header />
      <AboutHero />
    
      <AboutBody />
      <Faqsection />
      <GetinTouchSection />
      <Footer />
    </div>
  )
}

export default page