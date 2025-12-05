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
      <main role="main" aria-label="Main content">
        <Hero />
        <About />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
