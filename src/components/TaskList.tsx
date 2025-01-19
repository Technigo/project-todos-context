import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useTaskStore } from "../stores/TaskStore";
import { TaskContainer } from "./TaskList.styles";
import { Task } from "./Task";
import styled from "styled-components";

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #666;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }
`;

export const TaskList = (): JSX.Element => {
  const { tasks, activeFilter } = useTaskStore();

  const filteredTasks = tasks
    .filter((task) => {
      if (activeFilter === "all") {
        return true;
      } else if (activeFilter === "completed") {
        return task.completed;
      } else {
        return task.category === activeFilter && !task.completed;
      }
    })
    .sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });

  if (filteredTasks.length === 0) {
    return (
      <EmptyState>
        <h3>No tasks found</h3>
        <p>Try adding some tasks or changing your filter</p>
      </EmptyState>
    );
  }

  return (
    <LayoutGroup>
      <TaskContainer role="list" aria-label="Task list">
        <AnimatePresence>
          {filteredTasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Task task={task} />
            </motion.div>
          ))}
        </AnimatePresence>
      </TaskContainer>
    </LayoutGroup>
  );
};
