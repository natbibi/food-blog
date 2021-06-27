import React from 'react';
import { Burger } from '../'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <Link to="/" style={{ textDecoration: 'none'}}>
        <h1 className="title" >Ste's Food</h1>
        </Link>
        <nav role="navigation">
            <Burger />
        </nav>
        </>
    );
}

export default Header;
