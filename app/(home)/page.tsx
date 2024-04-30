import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.05] relative">
      <div className='max-w-7xl mx-auto p-5'>
        <NavBar/>
        <HeroSection/>
      </div>
      <div className="h-10 xl:h-32 bg-gradent-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full">

      </div>

      <div className='max-w-7xl mx-auto p-5 mt-20'>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </div>
    
    </div>
  )
}
