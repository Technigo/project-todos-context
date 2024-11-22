import styled from "styled-components"


const HeaderFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  justify-content: flex-start; /* Push content to the top of the screen */
`;

const HeaderContent = styled.div`
  h1 {
    font-size: 4rem; 
    color: #FFF;
    margin: 0;
    font-family: "Reenie Beanie";

    @media (max-width: 480px) {
      font-size: 2.8rem; 
    }

    @media (max-width: 768px) {
    padding-top: 40px;  
  }

    @media (min-width: 1024px) {
      font-size: 5rem; /* Even larger font size for desktops */
    }
  }
`;



export const Header = () => {
  return (
    <header>
      <HeaderFlex>
        <HeaderContent>
          <h1>My To Do List ✔️</h1>
        </HeaderContent>
      </HeaderFlex>
    </header>
  )
}
