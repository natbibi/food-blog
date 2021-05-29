import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav role="navigation">
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/eatin" activeClassName="current">Eat Out</NavLink>
            <NavLink to="/eatout" activeClassName="current">Eat In</NavLink>
            <NavLink to="/contact" activeClassName="current">Contact</NavLink>
        </nav>
    );
}

export default Header;
