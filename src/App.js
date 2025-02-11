import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Main from "./pages/main";
import Home from "./pages/home";
import About from "./pages/about";
import ClubCards from "./pages/clubCards";
import Schedule from "./pages/schedule";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/club-cards" element={<ClubCards />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </div>
  );
}
