import React from 'react';
import { NavLink } from 'react-router';
import './Header.css';
const Header = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Login">Login</NavLink>
            </ul>
        </nav>
    );
};

export default Header;