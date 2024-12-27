import React from "react";
import styled from "styled-components";
import { Category } from "./Category";

const ListContainer = styled.div`
  padding: 1rem;
  background: #121212;
`;

export function CategoryList({ categories }) {
  return (
    <ListContainer>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </ListContainer>
  );
}
