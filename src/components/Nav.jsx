import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Nav = () => {
  const StyledNav = styled.nav`
    ul {
      display: flex;
      justify-content: right;
      align-items: center;
    }
    li{
        margin-right: 20px;
    }
    a{
        font-size: 20px;
        font-weight: normal;
        transition: color 0.4s;
        &:hover{
            color: #c5bdbd;
        }
    }
    

  `;
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
