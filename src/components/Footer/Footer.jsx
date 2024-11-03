// components/Footer.jsx
import React from 'react';
import './Footer.css';
import Facebook from '../img/Facebook.jpg';
import Inst from '../img/Inst.jpg';
import Telegram from '../img/Telegram.jpg';
import TikTok from '../img/TikTok.jpg';

const Footer = () => {
  return (
    <footer data-testid="footer" className="footer">
      <div className="footer-top" data-testid="footer-top">
        <h2>Download our apps</h2>
      </div>
      <div className="footer-content" data-testid="footer-content">
        <div className="social-media" data-testid="social-media">
          <img src={Inst} alt="Instagram" />
          <img src={Telegram} alt="Telegram" />
          <img src={Facebook} alt="Facebook" />
          <img src={TikTok} alt="TikTok" />
        </div>
        <div className="footer-links" data-testid="footer-links">
          <div>
            <h3>Інформація про компанію</h3>
            <a href="/about-us">Про нас</a>
            <a href="/terms">Умови використання сайту</a>
            <a href="/vacancies">Вакансії</a>
            <a href="/contact">Контакти</a>
          </div>
          <div>
            <h3>Партнерам</h3>
            <a href="/collaboration">Співпраця з нами</a>
            <a href="/advertising-terms">Умови реклами</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom" data-testid="footer-bottom">
        <p>BookRoster 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
