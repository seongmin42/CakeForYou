import styled from "styled-components";

const Button = styled.button`
  width: 490px;
  height: 58px;
  background: ${(props) => (props.background ? props.background : "white")};
  color: ${(props) => (props.color ? props.color : "black")};
  border: 1px solid #cccccc;
`;

export default Button;
