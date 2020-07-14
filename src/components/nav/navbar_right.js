import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled_comp from "styled-components";
import '../../App.css';

const Ul = styled_comp.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;

li {
  padding: 18px 10px;
  text-decoration: none;
  text-align: center;
}
@media (max-width: 768px) {
  flex-flow: column nowrap;
  background-color: #0D2538;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  li {
    color: #fff;
  }
}
`;


const NavBarRight = ({ open }) => {
  return (
    <Ul open={open} >
      <li>
        <NavLink exact to="/" activeStyle={{ textDecoration: 'none'}, {color: '#fff'}} style={{ textDecoration: 'none', color: '#fff'}}>Home&emsp;|
        </NavLink>
      </li>
      
      <li>
        <NavLink to="/about" activeStyle={{ textDecoration: 'none'}, {color: '#fff'}} style={{ textDecoration: 'none', color: '#fff'}}>About&emsp;|</NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeStyle={{ textDecoration: 'none'}, {color: '#fff'}} style={{ textDecoration: 'none', color: '#fff'}}>Contact</NavLink>
      </li>
    </Ul>
  )
}

export default NavBarRight
