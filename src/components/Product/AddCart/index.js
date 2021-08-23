import styled from "styled-components";

const AddCart = styled.button`
  background-color: ${(props) => props.theme.colors.mainColor};
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  height: 22px;
  width: 100%;
  border-radius: ${(props) => props.theme.commonRadius};
  margin-top: 8px;
  cursor: pointer;
`;

export default AddCart;
