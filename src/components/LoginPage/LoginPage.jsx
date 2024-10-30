// src/pages/LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Імпорт useNavigate
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate(); // Ініціалізація useNavigate

  const handleCreateAccount = () => {
    navigate('/register'); // Перенаправлення на сторінку реєстрації
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="username" className="input-field" />
      <input type="password" placeholder="password" className="input-field" />
      <button className="continue-button">Continue</button>
      <a href="#" className="forgot-password">Forgot your password?</a>
      <button className="create-account-button" onClick={handleCreateAccount}>create a new account</button> {/* Додано onClick */}
    </div>
  );
};

export default LoginPage;
