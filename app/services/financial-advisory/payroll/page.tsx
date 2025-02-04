import Footer from '@/app/Footer'
import GetinTouchSection from '@/app/GetInTouchSection'
import Header from '@/app/Header'
import React from 'react'
import PayrollBody from './PayrollBody'




const page = () => {
  return (
    <>
    <Header />
    <PayrollBody />
    <GetinTouchSection />
    <Footer />
    </>
  )
}

export default page
