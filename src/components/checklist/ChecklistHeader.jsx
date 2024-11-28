/** 
 * 
 * This styled component contains the Header of the Checklist. 
 * 
 * The header dynamically displays a title passed as a prop (title and description).
 * 
 * It displays the TaskCounter Component, and contains a styled component to center the TaskCounter. 
 * 
 * 
 */

import styled from "styled-components";
import TaskCounter from "./TaskCounter";

const StyledChecklistHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h2 {
  font-size: 30px;
  font-weight: 200;
  color: #454545;
  }

  p {
    padding: 20px;
    font-size: 16px;
    font-weight: 300;
    color: #888;
    font-style: italic; 
    margin-top: 0;
    border-bottom: 1px solid;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`;

/* styled component to center the counter */

const CenteredCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px; 
`;

const ChecklistHeader = ({ title, description }) => {
  return (
    <StyledChecklistHeader>
      <h2>{title}</h2>
      <p>{description}</p>
      <CenteredCounter>
        <TaskCounter />
      </CenteredCounter>
    </StyledChecklistHeader>
  );
};

export default ChecklistHeader;
