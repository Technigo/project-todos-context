
import { Home } from "./sites/Home";
import styled from "styled-components";

const AppStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

export const App = () => {
  return (
    <>
      <AppStyle>
        <Home />
      </AppStyle>
    </>
  )
};
