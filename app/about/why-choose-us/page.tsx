import Footer from '@/app/Footer'
import GetinTouchSection from '@/app/GetInTouchSection'
import Header from '@/app/Header'
import React from 'react'
import WhyUsHero from './WhyUsHero'
import WhyUs from './WhyUs'

const page = () => {
  return (
    <div>
        <Header />
        <WhyUsHero />
        <WhyUs />

        <GetinTouchSection />

        <Footer />
    </div>
  )
}

export default page