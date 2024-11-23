import styled from "styled-components";
import pencil from "../assets/pencil.png"

const HeaderWrapper = styled.div`
  font-family: "Indie Flower", cursive;
  font-weight: 400;
  font-size: 1.5rem;
  height: 10rem;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
@media (max-width: 480px){
  height: 8rem;
}
`;

const HeaderImg = styled.img`
  max-width: 2.5rem;
  max-height: 2.5rem;
`;

export const Header = () => {
  return(
    <HeaderWrapper>
    <h1>Taskbuddy</h1>
    <HeaderImg src={pencil} alt="pencil" />
    </HeaderWrapper>
  );
};