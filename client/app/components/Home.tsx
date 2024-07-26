import React from 'react'
import Hero from './Hero/Hero'
import Feature from './Features/Feature'
import Popular from './Popular/Popular'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <Feature/>
      <Popular/>
    </div>
  )
}

export default Home
