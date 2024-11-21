import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #1d1f21;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  flex-grow: 1;
  text-align: center;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: white;
  }
`;

export const Header = () => {
  const [title, setTitle] = useState("Checklist");
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <HeaderContainer>
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={() => setIsEditing(false)}
          autoFocus
        />
      ) : (
        <Title onClick={() => setIsEditing(true)}>{title}</Title>
      )}
      <EditButton onClick={() => setIsEditing(true)}>✏️</EditButton>
    </HeaderContainer>
  );
};
