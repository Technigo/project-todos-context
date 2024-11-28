/**
 * This component displays a "404 - Page Not Found" message when the user navigates to a non-existent route. 
 * 
 * It imports Link from react-router-dom to create a navigation link for Go Back to Home.  
 * 
 * */

import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled container for centering content
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
`;

// Styled link with button-like appearance
const StyledLink = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f8f8f8;
  color: #0eb0b7;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const PageNotFound = () => {
  return (
    <Container>
      {/* Main heading for the error message */}
      <h1>Oh no!</h1>

      {/* Subheading to clarify that the page was not found */}
      <h2>404 Not Found</h2>

      {/* Message explaining the situation to the user */}
      <p>It seems that the page you are trying to access does not exist.</p>

      {/* Link component to navigate back to the home page */}
      {/* The link points to "/go-back-to-home", which is routed to render the Home component */}
      <Link to="/">Go Back to Home</Link>
    </Container>
  );
};

export default PageNotFound;
