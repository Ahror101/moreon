import { FaPhone, FaInstagram, FaFacebook, FaVk } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-teal-900 text-white">
      <div className="flex justify-between items-center p-2 px-4 text-sm">
        <span className="flex items-center gap-2">
          <FaPhone /> +7 (495) 859-03-72
        </span>
        <div className="flex gap-3 text-lg">
          <FaInstagram />
          <FaFacebook />
          <FaVk />
        </div>
      </div>
      <div className="bg-black p-3 text-center">
        <ul className="flex justify-center gap-6 text-sm">
          <li className="font-bold text-teal-400">moreon FITNESS</li>
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
