import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header/Header"
import Checklist from "../../components/checklist/Checklist"; // Checklist page
import Footer from "../../components/footer/Footer"; // Footer component

const Nav = styled.nav`
  display: flex;
  justify-content: center; 
  padding: 10px;
  background-color: #f8f8f8;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0eb0b7;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.25s ease-in-out;

  &:hover {
    color: #333;
  }
`;


const Home = () => {
  return (
    <div className="homepage">
      <Nav>
        <StyledLink to="/about">About</StyledLink>
      </Nav>
      {/* Header */}
      <Header />

      {/* Main page for checklist, the only one I got so far */}
      <Checklist />

      {/* Footer */}
      <Footer /> 
    </div>
  );
};

export default Home;