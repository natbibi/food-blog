import React from 'react';
import { Burger } from '../'

const Header = () => {
    return (
        <>
        <h1 className="title">Ste's Food</h1>
        <nav role="navigation">
            <Burger />
        </nav>
        </>
    );
}

export default Header;
