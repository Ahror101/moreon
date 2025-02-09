import React from 'react'
import Navbar from './components/navbar'
import Contacts from './pages/contact'
import Footer from './pages/footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Contacts/>
      <Footer/>
    </div>
  )
}
