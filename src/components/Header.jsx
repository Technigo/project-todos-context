import styled from "styled-components"
import todo from "../assets/todolist.jpg"

const HeaderFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
  justify-content: flex-start; /* Push content to the top of the screen */


  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const HeaderImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px; /* Adds spacing between the image and the heading */

  @media (min-width: 768px) {
    max-width: 50%; /* Adjust image size for tablets and larger screens */
  }

  @media (min-width: 1024px) {
    max-width: 30%; /* Adjust image size for desktops */
  }
`;

const HeaderContent = styled.div`
  h1 {
    font-size: 2.3rem; /* Default font size for mobile */
    color: #333;
    margin: 0;
    font-family: "Reenie Beanie";

    @media (min-width: 768px) {
      font-size: 3rem; /* Larger font size for tablets */
    }

    @media (min-width: 1024px) {
      font-size: 4rem; /* Even larger font size for desktops */
    }
  }
`;



export const Header = () => {
  return (
    <header>
      <HeaderFlex>
        <HeaderImg src={todo} alt="To do list" className="todo" />
        <HeaderContent>
          <h1>My To Do List ✔️</h1>
        </HeaderContent>
      </HeaderFlex>
    </header>
  )
}
