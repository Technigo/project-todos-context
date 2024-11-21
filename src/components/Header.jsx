import styled from "styled-components";

const HeaderWrapper = styled.div`
text-align: center;
color: hotpink;
`;

export const Header = () => {
  return(
    <HeaderWrapper>
    <h1>Welcome to TaskBuddy</h1>
    <h2>Time to Get Organized.</h2>
    </HeaderWrapper>
  );
};