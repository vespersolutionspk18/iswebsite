import Footer from '@/app/Footer'
import GetinTouchSection from '@/app/GetInTouchSection'
import Header from '@/app/Header'
import React from 'react'
import ERPBody from './ERPBody'




const page = () => {
  return (
    <>
    <Header />
    <ERPBody   />
    <GetinTouchSection />
    <Footer />
    </>
  )
}

export default page
