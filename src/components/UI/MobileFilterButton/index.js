import styled from "styled-components";

const MobileFilterButtonTag = styled.button`
  background-color: ${(props) => props.theme.colors.mainColor};
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
  width: 120px;
  height: 50px;
  border-radius: ${(props) => props.theme.commonRadius};
  font-size: 16px;
  svg {
    margin-right: 10px;
  }
`;

function MobileFilterButton({ onClick, children }) {
  return (
    <MobileFilterButtonTag onClick={onClick}>{children}</MobileFilterButtonTag>
  );
}

export default MobileFilterButton;
