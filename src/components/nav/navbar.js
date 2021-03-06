import React from "react";
import { withRouter } from "react-router-dom";
import styled_comp from "styled-components";
import MenuButton from "./menu_button";
import '../../App.css';


const Nav = styled_comp.nav`



font-family: 'Arvo', serif;
width: 100%;
height: 150px;
display: flex;
align-items: flex-start;
padding: 0 50px;
color: white;
border-top: 5px;

@media (max-width: 800px) {
  font-weight: normal;
  margin-left: -20px;
}


justify-content: space-between;
.logo {
  padding: 15px 0;
  font-weight: 200;
  font-family: sans-serif;
  font-size: 1.5rem;
  padding-top: 5rem;
  @media (max-width: 800px) {
    font-weight: normal;
  }
  .title{
    font-size: 1.3rem;
    text-align: center;
    padding-top: 1rem;
    @media (max-width: 1000px) {

    }
  }
  
}



.Name-border{
  padding-top: 20px;
}

.Name {
  color: #333;
  // border-right: solid 3px #000;
  white-space: nowrap;
  overflow: hidden;    
  display: inline-block;
  font-family: 'Arvo', serif;
  font-size: 28px;

  @media (max-width: 800px) {
    font-size: 24px;
    
  }

  // animation: animated-text 3s steps(30,end) 1s 1 normal both/* animated-cursor 800ms steps(30,end) infinite*/;
  
}


.Title{
  color: #333;
  overflow: hidden;    
  white-space: nowrap;
  border-right: solid 3px #fff;
 
  @media (max-width: 800px) {
    font-size: 16px;
    
  }

  // animation: fadeIn ease 7s;

}

/* text animation */

@keyframes animated-text{
from{width: 0;}
to{width: 240px;}
}

@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  60%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

/* cursor animations */

@keyframes animated-cursor{
from{border-right-color: rgba(36, 36, 36, 0.75);}
to{border-right-color: transparent;}
}

.temp{
  margin-top: 1rem;
  color: #b42222;
  font-size: 10px;

}

`;


const Navbar = () => {
  return (
    <Nav id = "navigation">
      {/* <span class="dot"></span> */}
      <div className="Name-border">
        <div className="Name">Michael Barbas</div>
        <div className="Title">Software Developer</div>
        <div className = "temp">Work in Progress.</div>
      </div>
      <MenuButton />
    </Nav>
  );
};

export default withRouter(Navbar);
