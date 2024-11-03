
import React from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'; 
import './Header.css';
import Menu from './Menu';
import { signOut } from 'firebase/auth'; 
import { auth } from '../../firebase'; 

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/'); 
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <header className="header">
      <Menu />
      <Link to="/" className="header-title"> 
        <h1>BookRoster</h1>
      </Link>
      <button onClick={handleLogout} className="header-button"> 
        <AiOutlineComment className="icon" />
      </button>
    </header>
  );
};

export default Header;
