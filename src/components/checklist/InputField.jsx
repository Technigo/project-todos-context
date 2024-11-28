/**
 * 
 * This styled component handles the input field, where the enduser enters new tasks. 
 * 
 * The `onChange` prop allows the parent component to define what happens when the input value changes. 
 * 
 * The placeholder prop shows a text in the input field. 
 * 
 * */

import styled from "styled-components";

const StyledInputField = styled.input`
  border: none;
  outline: none;
  font-weight: 200;
  position: relative;
  margin-top: 40px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputField = ({ value, onChange, placeholder }) => {
  return (
    <StyledInputField
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      />
  );
};

export default InputField;