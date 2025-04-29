import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Foods from '../components/Foods'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Foods />
      <Cart />
    </>
  )
}

export default Home
