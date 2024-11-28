/** 
 * 
 * This styled component displays the task counter for the checklist. 
 * 
 * The TaskCounter dynamically calculates and displays the total number of tasks and the number of incomplete tasks using Zustand for state management. 
 * 
 */

import useStore from "../../store/store"; // Zustand
import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; 
  font-size: 1rem;
`;

const StrongText = styled.span`
  font-weight: bold;
  color: #454545;
`;
const StrongGreenText = styled.span`
  font-weight: bold;
  color: #3b8c40; 
`;

const TaskCounter = () => {
  const tasks = useStore((state) => state.tasks);
  const totalTasks = tasks.length;
  const incompleteTasks = tasks.filter((task) => !task.completed).length;

  // Check if all tasks are completed: 
  const allTasksDone = totalTasks > 0 && incompleteTasks === 0;

  return (
    <CounterWrapper>
      {allTasksDone ? (
        <StrongGreenText>All tasks are done! 🎉 </StrongGreenText>
      ) : (
        <>
          <StrongText>Pending tasks: </StrongText> {incompleteTasks}/{totalTasks}
        </>
      )}
    </CounterWrapper>
  );
};

export default TaskCounter;