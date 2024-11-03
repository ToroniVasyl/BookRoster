// src/pages/LoginPage.jsx
import React from 'react';
import { Link,useNavigate } from 'react-router-dom'; 
import './LoginPage.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  function logIn(e) {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password).then((user) => {
          console.log(user);
          setEmail("");
          setPassword("");
          setError("");
          navigate('/');
      })
          .catch((error) =>{
              console.log(error);
              setError("Sorry, could not find your account")
          }
      );
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="input-field" />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" className="input-field" />
      <button onClick={logIn} className="continue-button">Continue</button>
      {error ? <p id={styles.error}>{error}</p> : ""}
      <a href="#" className="forgot-password">Forgot your password?</a>
      <Link to ="/register">
      <button className="create-account-button" >create a new account</button> 
      </Link>
    </div>
  );
};

export default LoginPage;
