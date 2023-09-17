import React from 'react'
import Banner from '../Banner/Banner'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import Categories from '../Categories/Categories'
import Works from '../Works/Works'

export default function Home() {
  return (
    <div>
      
      <Hero />
      <Banner />
      <Works />
      <Categories />
      <Footer />
    </div>
  )
}
