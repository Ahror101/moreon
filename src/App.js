import React from 'react'
import Navbar from './components/navbar'
import Contacts from './pages/contact'
import Footer from './pages/footer'
import About from './pages/about'

export default function App() {
  return (
    <div>
      <Navbar />
      <About/>
      <Contacts />
      <Footer />
    </div>
  )
}
