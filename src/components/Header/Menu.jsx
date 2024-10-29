import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Імпорт useLocation
import './Menu.css';
import { BiCart } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { FaHashtag } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineFileDone } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import { BsGear } from 'react-icons/bs';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Використовуємо useLocation для отримання маршруту

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false); // Закриває меню при зміні маршруту
  }, [location]); // Відстежуємо зміни маршруту

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
          <Link to="/profile" className="menu-button">
            <AiOutlineUser className='icons' />
          </Link>
          <Link to="/hashtags" className="menu-button">
            <FaHashtag className='icons' /><AiFillHeart className='heart' />
          </Link>
          <Link to="/Note" className="menu-button">
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
