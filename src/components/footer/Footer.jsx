/** 
 * 
 * This styled component contains the footer section and includes a link to a GitHub account, a logo, and copyright information.
 * 
 */

import styled from "styled-components";
import gitHubLogo from "../../assets/GitHub-logo.png"

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 20px;
  color: #454545;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  min-width: 44px;
  min-height: 44px;
`;

const FooterLogo = styled.img`
  width: 30px;
  margin-right: 5px;
`;

const FooterLink = styled.a`
  color: #454545;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterCopyright = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo src={gitHubLogo} alt="GitHub Logo" />
        <FooterLink
          href="https://github.com/Joheri1"
          aria-label="Link to Johanna's GitHub account"
          target="_blank"
          rel="noopener noreferrer"
        >
          Joheri1
        </FooterLink>
      </FooterContent>
      <FooterCopyright>
        <h3>© 2024 Copyright - Developed by Johanna Eriksson</h3>
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
