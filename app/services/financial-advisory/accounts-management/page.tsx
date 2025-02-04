import Footer from '@/app/Footer'
import GetinTouchSection from '@/app/GetInTouchSection'
import Header from '@/app/Header'
import React from 'react'
import AccountsBody from './AccountsBody'

const page = () => {
  return (
    <>
    <Header />
    <AccountsBody />
    <GetinTouchSection />
    <Footer />
    </>
  )
}

export default page
