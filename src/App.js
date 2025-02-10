import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
<<<<<<< HEAD
import Contacts from './pages/contact'
import Footer from './pages/footer'
=======
import Home from './pages/home'
>>>>>>> feab73c0699babcc1eb01c954b86c9343db27aaa
import About from './pages/about'

export default function App() {
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <About/>
      <Contacts />
      <Footer />
=======
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
>>>>>>> feab73c0699babcc1eb01c954b86c9343db27aaa
    </div>
  )
}
