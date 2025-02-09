import React from 'react'
import Navbar from './components/navbar'
import Contacts from './pages/contact'
import Footer from './pages/footer'
import Home from './pages/home'

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Contacts />
      <Footer />
    </div>
  )
}
