import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useTaskStore } from "../stores/TaskStore";
import {
  TaskContainer,
  TaskCard,
  TaskHeader,
  Tag,
  MoreButton,
  TaskContent,
  TaskTitle,
  TaskText,
  TaskFooter,
  DeleteButton,
} from "./TaskList.styles";
import styled from "styled-components";

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  
  h3 {
    margin-bottom: 1rem;
  }
`;

export const TaskList = () => {
  const { tasks, toggleTask, deleteTask, activeFilter } = useTaskStore();

  const filteredTasks = tasks
    .filter((task) => {
      if (activeFilter === "all") {
        return true;
      } else if (activeFilter === "completed") {
        return task.completed;
      } else {
        return task.category === activeFilter;
      }
    })
    .sort((a, b) => {
      // If a is completed and b isn't, a goes after b
      if (a.completed && !b.completed) return 1;
      // If b is completed and a isn't, a goes before b
      if (!a.completed && b.completed) return -1;
      // If both are completed or both aren't, maintain their original order
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
              <TaskCard completed={task.completed}>
                <TaskHeader>
                  <Tag category={task.category}>{task.category}</Tag>
                  <MoreButton>•••</MoreButton>
                </TaskHeader>

                <TaskContent>
                  <TaskTitle>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                    />
                    <TaskText completed={task.completed}>{task.name}</TaskText>
                  </TaskTitle>

                  <TaskFooter>
                    <span>{task.timestamp.toLocaleDateString()}</span>
                    <DeleteButton onClick={() => deleteTask(task.id)}>
                      Delete
                    </DeleteButton>
                  </TaskFooter>
                </TaskContent>
              </TaskCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </TaskContainer>
    </LayoutGroup>
  );
};
