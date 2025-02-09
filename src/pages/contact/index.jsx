import React from "react";
import "./style.css";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contacts-info">
        <h2>Контакты</h2>
        <p>
          <strong>Адрес:</strong>
          <br /> г. Москва м. Ясенево, ул. Голубинская, д. 16
        </p>
        <p>
          <strong>Телефон:</strong>
          <br /> +7 (495) 481-60-60
        </p>
        <p>
          <strong>E-mail:</strong>
          <br /> <a href="mailto:moreon@more-on.ru">moreon@more-on.ru</a>
        </p>
      </div>
      <div className="contacts-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8984.635640490143!2d37.53418725!3d55.625407249999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab3fa554b85a5%3A0x395c42a6eb32768a!2sYasenevo%2C%20Moscow%2C%20Russia!5e0!3m2!1sen!2sru!4v1707496000000!5m2!1sen!2sru"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
