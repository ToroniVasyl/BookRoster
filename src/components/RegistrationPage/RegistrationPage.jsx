// src/pages/RegistrationPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Імпортуємо useNavigate для перенаправлення
import './RegistrationPage.css';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../firebase'; // Шлях до файлу, де ініціалізований Firebase

const RegistrationPage = () => {
  const [email, setEmail] = useState(''); // Ініціалізуємо email
  const [password, setPassword] = useState(''); // Ініціалізуємо password
  const [confirmPassword, setConfirmPassword] = useState(''); // Ініціалізуємо confirmPassword
  const [error, setError] = useState(''); // Додаємо стан для помилок
  const navigate = useNavigate(); // Ініціалізуємо useNavigate

  const register = (e) => { // Виправлено синтаксис функції
    e.preventDefault();
    if(password.length < 6) {
      setError('Password is too short');
      return
  }

    // Перевірка, чи паролі збігаються
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setEmail("");
        setPassword("");
        setConfirmPassword(""); // Додаємо скидання для confirmPassword
        setError("");
        navigate('/'); // Перенаправляємо на головну сторінку
      })
      .catch((error) => {
        console.error(error);
        setError('There was a problem with the registration.'); // Встановлюємо повідомлення про помилку
      });
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={register}>
        <input className='input-field'
        placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          required
        />
        <input className='input-field'
        placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          required
        />
        <input className='input-field'
        placeholder='password again'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          name="confirmPassword"
          required
        />
        {/* <div className="terms">
          <input
            type="checkbox"
            id="termsCheckbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required // Робимо обов'язковим для підтвердження
          />
          <label htmlFor="termsCheckbox">
            Реєструючись, ви приймаєте наші Умови, Політику конфіденційності і Політику щодо файлів cookie.
          </label>
        </div> */}
        <button type="submit" className="continue-button">Continue</button>
        {error && <p className="error">{error}</p>} {/* Покажемо помилку, якщо вона є */}
      </form>
    </div>
  );
};

export default RegistrationPage;
