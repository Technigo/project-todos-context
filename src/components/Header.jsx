import React, { useState } from "react";
import styled from "styled-components";
import editIcon from "../assets/icons/edit.png";
import { useTaskStore } from "../contexts/store";

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const TitleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  &:hover img {
    opacity: 1;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const EditIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 0.5rem;
  cursor: pointer;
  opacity: 0;
  filter: invert(1);
  transition: opacity 0.2s ease-in-out, filter 0.2s ease-in-out;
`;

const Input = styled.input`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-align: center;
  background: none;
  border: none;
  outline: none;
  margin: 0;
  &::placeholder {
    color: gray;
  }
`;

export function Header() {
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState("");

  const title = useTaskStore((state) => state.title);
  const setTitle = useTaskStore((state) => state.setTitle);

  React.useEffect(() => {
    setDraftTitle(title);
  }, [title]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setDraftTitle(e.target.value);
  };

  const handleInputBlur = () => {
    if (draftTitle.trim() === "") {
      setDraftTitle(title);
    } else {
      setTitle(draftTitle);
    }
    setIsEditing(false);
  };

  return (
    <HeaderContainer>
      {isEditing ? (
        <Input
          value={draftTitle}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <TitleWrapper>
          <Title>{title}</Title>
          <EditIcon src={editIcon} alt="Edit Title" onClick={handleEditClick} />
        </TitleWrapper>
      )}
    </HeaderContainer>
  );
}
