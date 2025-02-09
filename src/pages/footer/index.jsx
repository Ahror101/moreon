import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="working-hours">
            <img src={require("../../assets/navbar/logo.png")} alt="" />
            <h3>Время работы:</h3>
            <p>
              <strong>Будни:</strong> 07:00 - 23:00
            </p>
            <p>
              <strong>Бассейн:</strong> 07:00 - 23:00
            </p>
            <p>
              <strong>Выходные:</strong> 09:00 - 23:00
            </p>
            <p>
              <strong>Бассейн:</strong> 09:00 - 23:00
            </p>
          </div>
        </div>

        {/* Xizmatlar */}
        <div className="footer-section">
          <ul>
            <li>Тренажерный зал</li>
            <li>Спортивный бассейн</li>
            <li>Персональный тренинг</li>
            <li>Аэробные и кардио программы</li>
            <li>Скалодром для детей</li>
          </ul>
        </div>

        {/* Qo'shimcha xizmatlar */}
        <div className="footer-section">
          <ul>
            <li>Единоборства</li>
            <li>Танцы</li>
            <li>Фитнес-тестирование</li>
            <li>Вакансии</li>
            <li>Подарочный сертификат</li>
          </ul>
        </div>

        {/* Manzil va ijtimoiy tarmoqlar */}
        <div className="footer-section">
          <p>📍 г. Москва, м. Ясенево, ул. Голубинская, д. 16</p>
          <p>📞 +7 (495) 859-03-70</p>
          <div className="social-icons">
            <span>VK</span> <span>Instagram</span> <span>Facebook</span>
          </div>
          <div className="app-buttons">
            <button className="google-play">Google Play</button>
            <button className="app-store">App Store</button>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© AО Европейские технологии и сервис. 2021</p>
        <p>Использование cookies</p>
        <p>Политика обработки персональных данных</p>
        <p> Правила посещения</p>
      </div>
    </footer>
  );
};

export default Footer;
