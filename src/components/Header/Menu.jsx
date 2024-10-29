import React, { useState } from 'react';
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <button className="menu-button"><BiCart className='icons'  />
          </button>
          <button className="menu-button"><AiOutlineUser className='icons' />
          </button>
          <button className="menu-button"><FaHashtag className='icons' /><AiFillHeart className='heart' /></button>
          <button className="menu-button"><AiOutlineFileDone className='icons' />
          </button>
          <button className="menu-button">< BsGear className='icons' /></button>
        </div>
      )}
    </div>
  );
};

export default Menu;
