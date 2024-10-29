
import React from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import './Header.css';
import Menu from './Menu';

const Header = () => {
    return (
        <header className="header">
            <Menu />
            <h1 className="header-title">BookRoster</h1>
            <button className="header-button">
                <AiOutlineComment className="icon" />
            </button>

        </header>
    );
};

export default Header;
