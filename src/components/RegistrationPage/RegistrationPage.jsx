// src/pages/RegistrationPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Імпортуємо useNavigate для перенаправлення
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate(); // Ініціалізуємо useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Перевірка, чи паролі збігаються
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('https://api.example.com/http://localhost:9000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          termsAccepted,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      
      
      navigate('/'); 
    } catch (error) {
      console.error('There was a problem with the registration:', error);
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="again password"
          className="input-field"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="terms">
          <input
            type="checkbox"
            id="termsCheckbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label htmlFor="termsCheckbox">
            Реєструючись, ви приймаєте наші Умови, Політику конфіденційності і Політику щодо файлів cookie.
          </label>
        </div>
        <button type="submit" className="continue-button">Continue</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
