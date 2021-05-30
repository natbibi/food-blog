import React, { useState } from 'react';
import { FaHamburger } from "react-icons/fa";
import styled from 'styled-components';
import RightNav from '../RightNav';

const StyledBurger = styled.div`
    z-index: 20;
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    margin: 1rem;
    font-size: 2rem;
  
    @media (max-width: 800px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
      color: ${({ open }) => open ? '#f07e22' : '#fa7725'};
    }
`

const Burger = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(prev => !prev)} >
                <FaHamburger />
            </StyledBurger>
            <RightNav open={open}/>
        </>
    )
}

export default Burger
