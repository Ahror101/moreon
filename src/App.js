import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Contacts from './pages/contact'
import Footer from './pages/footer'
import Home from './pages/home'
import About from './pages/about'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Contacts />
      <Footer />
    </div>
  )
}
