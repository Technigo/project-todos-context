import styled from "styled-components";

const AddTodoButtonStyle = styled.button`
display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 30%;
    background-color: #04257c;
    border: 0;
    border-radius: 20px;
    color: whitesmoke;
`
export const AddTodoButton = () => {
    return (
        <AddTodoButtonStyle>
            Add
        </AddTodoButtonStyle>
    )
}