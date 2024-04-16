import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Transport from '../../components/Book2/Transport'
import HeroTrain from '../../components/HeroTrain/HeroTrain'

export default function Home() {
  return (
   <div className='bg-gray-100'>
   <Navbar/>
   {/* <Transport/> */}

   <HeroTrain/>
   <Footer/>
   </div>
  )
}
