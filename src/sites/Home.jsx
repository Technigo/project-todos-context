import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { ToDoCard } from "../components/ToDoCard";

export const Home = () => {
    return (
        <>
            <Header />
            <ProjectCard />
            <ToDoCard />
        </>
    )
}