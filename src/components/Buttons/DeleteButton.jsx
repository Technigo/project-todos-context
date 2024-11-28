/**
 * This component is for the button that deletes tasks from the list. 
 * 
 * The onClick prop lets the parent component define what will happen when the button is clicked.
 *
 * Includes hover effects for desktop, but for screens smaller than 1024px it's visible by default. 
*/

import styled from "styled-components";

// Styled component for the delete button with hover effects

const StyledDeleteButton = styled.span`
  font-size: 18px;
  padding-left: 20px;
  color: #d8d8d8;
  cursor: pointer;
  opacity: 0;
  transition: color 0.3s, opacity 0.3s;
  /*height:36px;
  width:36px;
  line-height:36px;*/

  &:hover {
    color: #cd4400; // Change color to red on hover
    opacity: 1; // Make the button fully visible on hover
  }

  // Circle for the delete button
  &::before {
    content: "✕"; // An "X" symbol
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    opacity: 1; // The button is by default visible on tablets and mobile. 
    color: #cd4400;
  }
`;

// DeleteButton component that is triggered when clicked
const DeleteButton = ({ onClick, title }) => (
  <StyledDeleteButton onClick={onClick} title={title} />
);

export default DeleteButton;