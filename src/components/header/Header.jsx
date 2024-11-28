/**
 * Header Component
 *
 * This styled component contains the main header for the entire page.
 * 
 * It displays the text with a FontAwesome checkmark icon.
 */

import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 20px;
  margin-top: 10px;
  text-align: center;
 
  h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 200;
  color: #454545;
  margin-bottom: 20px;
  }

  i {
    font-size: 40px;
    color: #0eb0b7;
    margin-right: 5px;
  }

  @media (max-width: 1024px) {
    h1 {
    font-size: 20px;
    }
    i {
      font-size: 20px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <i className="fa fa-check"></i>
        Johanna's Checklists
      </h1>
    </StyledHeader>
  );
};

export default Header;
