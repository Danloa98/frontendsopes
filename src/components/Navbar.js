import React from 'react'
import logor from '../logor.png';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavBarElements';

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink to="/">
        <img src={logor} alt="Logo" />
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to='/Ram' >
               <h3>Ram</h3>
            </NavLink>
            <NavLink to='/Lista' >
                <h3>Lista Procesos</h3>
            </NavLink>
            <NavLink to='/Logs' >
                <h3>Logs</h3>
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='hola'>About</NavBtnLink>
        </NavBtn>

    </Nav>
    
    </>
  )
}

export default Navbar