import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { ToDoCard } from "../components/ToDoCard";
import styled from "styled-components";

const HomeStyle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
`
export const Home = () => {
  return (
    <>
      <HomeStyle>
        <Header />
        <ToDoCard />
        <ProjectCard />
      </HomeStyle>
    </>
  )
}