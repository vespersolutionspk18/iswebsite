import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ContactBody from './ContactBody'
import AboutHero from './AboutHero'


const page = () => {
  return (
    <div>
      <Header />
      <AboutHero />
        <ContactBody />
    
  
      <Footer />
    </div>
  )
}

export default page