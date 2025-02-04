import Footer from '@/app/Footer'
import GetinTouchSection from '@/app/GetInTouchSection'
import Header from '@/app/Header'
import React from 'react'
import BookkeepingBody from './BookkeepingBody'


const page = () => {
  return (
    <>
    <Header />
    <BookkeepingBody />
    <GetinTouchSection />
    <Footer />
    </>
  )
}

export default page
