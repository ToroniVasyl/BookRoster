import React from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Імпорт Link з react-router-dom
import './Header.css';
import Menu from './Menu';

const Header = () => {
    return (
        <header className="header">
            <Menu />
            <Link to="/" className="header-title"> {/* Додано Link для заголовка */}
                <h1>BookRoster</h1>
            </Link>
            <button className="header-button">
                <AiOutlineComment className="icon" />
            </button>
        </header>
    );
};

export default Header;
