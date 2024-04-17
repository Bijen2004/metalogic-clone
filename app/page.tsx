
import FirstSection from '@/components/Homepage/FirstSection'
import Metalogic from '@/components/Homepage/Metalogic'
import OurProducts from '@/components/Homepage/OurProducts'
import OurServices from '@/components/Homepage/OurServices'
import SnakeGraph from '@/components/Homepage/SnakeGraph'
import React from 'react'

const Home = () => {
  return (
    <div>
      <FirstSection />
      <SnakeGraph />
      <Metalogic />
      <OurProducts />
      <OurServices />
    </div>
  )
}

export default Home