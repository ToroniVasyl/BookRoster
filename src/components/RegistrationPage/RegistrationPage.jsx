// src/pages/RegistrationPage.jsx
import React from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <input type="text" placeholder="username" className="input-field" />
      <input type="password" placeholder="password" className="input-field" />
      <input type="password" placeholder="again password" className="input-field" />
      <div className="terms">
        <input type="checkbox" id="termsCheckbox" />
        <label htmlFor="termsCheckbox">
        Реєструючись, ви приймаєте наші Умови, Політику конфіденційності і Політику щодо файлів cookie.
        </label>
      </div>
      <button className="continue-button">Continue</button>
    </div>
  );
};

export default RegistrationPage;
