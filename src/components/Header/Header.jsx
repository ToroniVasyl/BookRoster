
import React from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">BookRoster</h1>
            <button className="header-button">
                <AiOutlineComment className="icon" />
            </button>
        </header>
    );
};

export default Header;
