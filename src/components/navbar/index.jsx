import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaVk,
  FaTelegram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="top-bar">
        <div className="icons">
          <span>
            <FaPhone /> +7 (495) 859-03-72
          </span>
          <div className="socials">
            <FaTelegram />
            <FaInstagram />
            <FaFacebook />
            <FaVk />
          </div>
        </div>
      </div>
      <div className="nav-menu">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="brand">
          <Link to={"/"}>
            <img src={require("../../assets/navbar/logo.png")} alt="*" />
          </Link>
        </div>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to={"/about"} onClick={() => setMenuOpen(false)}>
              О клубе
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setMenuOpen(false)}>
              Галерея
            </Link>
          </li>
          <li>
            <Link to="/club-cards" onClick={() => setMenuOpen(false)}>
              Клубные карты
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Услуги
            </Link>
          </li>
          <li>
            <Link to="/schedule" onClick={() => setMenuOpen(false)}>
              Расписание
            </Link>
          </li>
          <li>
            <Link to="/baths-and-pools" onClick={() => setMenuOpen(false)}>
              Бани и бассейны
            </Link>
          </li>
          <li>
            <Link to="/kids-center" onClick={() => setMenuOpen(false)}>
              Детский центр
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
