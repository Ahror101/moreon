import { Link } from "react-router-dom";
import "./style.css";
import {
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaVk,
  FaTelegram,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="top-bar">
        <div className="icons">
          <span>
            <FaPhone /> +7 (495) 859-03-72
          </span>
          <FaTelegram />
          <FaInstagram />
          <FaFacebook />
          <FaVk />
        </div>
      </div>
      <div className="nav-menu">
        <div className="brand">
          <img src={require("../../assets/navbar/logo.png")} alt="*" />
        </div>
        <ul>
          <li>
            <Link to={"/about"}>О клубе</Link>
          </li>
          <li>
            <Link to="/gallery">Галерея</Link>
          </li>
          <li>
            <Link to="/club-cards">Клубные карты</Link>
          </li>
          <li>
            <Link to="/services">Услуги</Link>
          </li>
          <li>
            <Link to="/schedule">Расписание</Link>
          </li>
          <li>
            <Link to="/baths-and-pools">Бани и бассейны</Link>
          </li>
          <li>
            <Link to="/kids-center">Детский центр</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
