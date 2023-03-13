import styled from "styled-components";

const B5 = styled.div`
  font-size: 60px;
  font-weight: normal;
  font-family: "Nanum GarMaesGeur";
  color: ${(props) => (props.color ? props.color : "black")};
`;

export default B5;
