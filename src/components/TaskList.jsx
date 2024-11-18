import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useTaskStore } from "../stores/TaskStore";
import { TaskContainer } from "./TaskList.styles";
import styled from "styled-components";
import { Task } from "./Task";

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;

  h3 {
    margin-bottom: 1rem;
  }
`;

export const TaskList = () => {
  const { tasks, activeFilter, dueDate } = useTaskStore();

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
      <TaskContainer>
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
