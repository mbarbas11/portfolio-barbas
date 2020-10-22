import React from "react";
import { NavLink } from "react-router-dom";
import styled_comp from "styled-components";
import "../../App.css";

const Ul = styled_comp.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
font-family: 'Arvo', serif;
li {
  padding-top: 50px;
  padding: 18px 10px;
  text-decoration: none;
  text-align: center;
}

a:hover{
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  padding: 6px 0;
}

@media (max-width: 800px) {
  flex-flow: column nowrap;
  
  
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 225px;
  //box-shadow: ${({ open }) => (open ? "-1px 0px 10px 1px #000" : "0")};
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  //background-color: ${({ open }) =>
    open ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.2)"};
 

  a:hover{
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    padding: 6px 0;
  }
}
`;

const NavBarRight = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <NavLink
          exact
          to="/"
          activeStyle={{
            textDecoration: "none",
            color: "#7d7777",
            fontFamily: "'Arvo', serif",
            fontSize: "1.2rem",
            cursor: "default",
          }}
          style={{
            textDecoration: "none",
            color: "#333",
            fontFamily: "'Arvo', serif",
            fontSize: "1.2rem",
          }}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          activeStyle={{
            textDecoration: "none",
            color: "#7d7777",
            fontFamily: "'Arvo', serif",
            fontSize: "1.2rem",
          }}
          style={{
            textDecoration: "none",
            color: "#333",
            fontFamily: "'Arvo', serif",
            fontSize: "1.2rem",
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          activeStyle={{
            textDecoration: "none",
            color: "#7d7777",
            fontFamily: "'Arvo', serif",
            fontSize: "1.2rem",
          }}
          style={{
            textDecoration: "none",
            color: "#333",
            fontFamily: "'Arvo', serif",
            fontSize: "1.2rem",
          }}
        >
          Contact
        </NavLink>
      </li>
    </Ul>
  );
};

export default NavBarRight;
