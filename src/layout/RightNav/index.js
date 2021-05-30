import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Ul = styled.ul`
  
  @media (max-width: 768px) {
    
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  
    li {
      padding: 18px 10px;
    }
  
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/eatout" activeClassName="current">Eat Out</NavLink>
            <NavLink to="/eatin" activeClassName="current">Eat In</NavLink>
            <NavLink to="/contact" activeClassName="current">Contact</NavLink>
        </Ul>
    )
}

export default RightNav
