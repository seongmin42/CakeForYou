import React from "react";
import styled from "styled-components";

function Header() {
  const HeaderContainer = styled.header`
    padding: 1rem;
    background-color: #f5f5f5;
    border: 1px solid red;
  `;

  return <HeaderContainer>hi</HeaderContainer>;
}

export default Header;
