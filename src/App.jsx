import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import MyWork from './Component/MyWork/MyWork'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Education from './Component/Education/Education'

import Skills from './Component/Skills/Skills'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <MyWork/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App