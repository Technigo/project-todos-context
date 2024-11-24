import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { ToDoCard } from "../components/ToDoCard";
import styled from "styled-components";

const HomeStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0rem 1rem 4rem 1rem;
width: 100%;
`
export const Home = () => {
  return (
    <>
      <HomeStyle>
        <Header />
        <ProjectCard />
        <ToDoCard />
      </HomeStyle>
    </>
  )
}