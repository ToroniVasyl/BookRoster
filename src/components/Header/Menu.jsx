// src/components/Menu.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Menu.css';
import { BiCart } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { FaHashtag } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineFileDone } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import { BsGear } from 'react-icons/bs';
import { auth } from '../../firebase'; 

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleUserClick = () => {
    if (auth.currentUser) {
      navigate('/profile'); 
    } else {
      navigate('/login'); 
    }
  };

  return (
    <div className="menu">
      <div className="menu-icon" onClick={toggleMenu}>
        <BsFilterLeft size={100} color='#386230' />
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
      {isOpen && (
        <div className="menu-buttons">
          <Link to="/cart" className="menu-button">
            <BiCart className='icons' />
          </Link>
          <button onClick={handleUserClick} className="menu-button"> 
            <AiOutlineUser className='icons' />
          </button>
          <Link to="/hashtags" className="menu-button">
            <FaHashtag className='icons' /><AiFillHeart className='heart' />
          </Link>
          <Link to="/note" className="menu-button">
            <AiOutlineFileDone className='icons' />
          </Link>
          <Link to="/settings" className="menu-button">
            <BsGear className='icons' />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
