import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
import { Container } from "../styles/Container";

const StyledHeader = styled.header`
  padding: 0.875rem 0;
  width: 100%;
  background-color: aliceblue;
`;
const StyledLogo = styled.h1`
  color: #232222;
  font-size: 30px;
  span{
    color: #928989;
  }
`;
const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderArea>
          <Link to="/">
            <StyledLogo>Alomgir <span>Store</span></StyledLogo>
          </Link>
          <Nav />
        </HeaderArea>
      </Container>
    </StyledHeader>
  );
};

export default Header;
