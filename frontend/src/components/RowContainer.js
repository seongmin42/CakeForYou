import styled from "styled-components";

const RowContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  background-color: ${(props) => props.background || "transparent"};
  box-shadow: ${(props) => props.boxShadow || "none"};
`;

export default RowContainer;
