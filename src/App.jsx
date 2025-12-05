import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Research from './components/Research'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <div className="w-full">
      
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
