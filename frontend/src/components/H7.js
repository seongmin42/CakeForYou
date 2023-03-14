import styled from "styled-components";

const H7 = styled.div`
  font-size: 20px;
  font-weight: normal;
  color: ${(props) => (props.color ? props.color : "black")};
`;

export default H7;
