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
          <li>О клубе</li>
          <li>Галерея</li>
          <li>Клубные карты</li>
          <li>Услуги</li>
          <li>Расписание</li>
          <li>Бани и бассейны</li>
          <li>Детский центр</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
