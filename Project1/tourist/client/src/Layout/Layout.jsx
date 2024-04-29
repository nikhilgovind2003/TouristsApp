import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Router from "../Router/Routers"
const Layout = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default Layout