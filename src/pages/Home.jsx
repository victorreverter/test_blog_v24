import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import IntroPost from '../components/IntroPost'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Search */}
      <Search />
      {/* IntroPost */}
      <IntroPost />
      {/* Blogs */}
      <Blogs />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home