
import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="username" className="input-field" />
      <input type="password" placeholder="password" className="input-field" />
      <button className="continue-button">Continue</button>
      <a href="#" className="forgot-password">Forgot your password?</a>
      <button className="create-account-button">create a new account</button>
    </div>
  );
};

export default LoginPage;
