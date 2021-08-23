import { useState } from "react";
import styled from "styled-components";

const ItemTypeFilterButtonTag = styled.button`
  background-color: #f2f0fd;
  border-radius: ${(props) => props.theme.commonRadius};
  cursor: pointer;
  color: ${(props) => props.theme.colors.mainColor};
  font-size: 13px;
  line-height: 18px;
  font-weight: 600;
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  ${(props) =>
    props.active
      ? `
  background-color: ${props.theme.colors.mainColor};
  color: #fff;`
      : null}
`;

function ItemTypeFilterButton({ onClick, children }) {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    onClick();
    setIsActive(!isActive);
  };

  return (
    <ItemTypeFilterButtonTag active={isActive} onClick={handleOnClick}>
      {children}
    </ItemTypeFilterButtonTag>
  );
}

export default ItemTypeFilterButton;
