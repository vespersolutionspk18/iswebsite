import Footer from '@/app/Footer'
import Header from '@/app/Header'
import React from 'react'
import MethodologyHero from './MethodologyHero'
import MethodologyBody from './MethodologyBody'
import GetinTouchSection from '@/app/GetInTouchSection'


const page = () => {
  return (
    <div>
        <Header />
        <MethodologyHero />
        <MethodologyBody />
        <GetinTouchSection />
        <Footer />
    </div>
  )
}

export default page