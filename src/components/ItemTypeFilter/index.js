import styled from "styled-components";

const ItemTypeFilterWrapper = styled.div`
  display: flex;
`;
const ItemTypeFilterButton = styled.button`
  background-color: #f2f0fd;
  border-radius: 2px;
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
  &.active {
  }
`;

function ItemTypeFilter() {
  return (
    <ItemTypeFilterWrapper>
      <ItemTypeFilterButton>mug</ItemTypeFilterButton>
      <ItemTypeFilterButton>shirt</ItemTypeFilterButton>
    </ItemTypeFilterWrapper>
  );
}

export default ItemTypeFilter;
