import styled from "styled-components";

const Input = styled.input`
  width: 490px;
  height: 56px;
  type: text;
  placeholder: ${(props) => (props.placeholder ? props.placeholder : "")};
  text-indent: 20px;
`;

export default Input;
