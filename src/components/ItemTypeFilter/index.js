import PropTypes from "prop-types";
import styled from "styled-components";

const ItemTypeFilterWrapper = styled.div`
  display: flex;
`;

const ItemTypeFilterButton = styled.button`
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

function ItemTypeFilter({ onChangeType, activeItemType }) {
  return (
    <ItemTypeFilterWrapper>
      <ItemTypeFilterButton
        active={activeItemType === "mug"}
        onClick={() => onChangeType("mug")}
      >
        mug
      </ItemTypeFilterButton>
      <ItemTypeFilterButton
        active={activeItemType === "shirt"}
        onClick={() => onChangeType("shirt")}
      >
        shirt
      </ItemTypeFilterButton>
    </ItemTypeFilterWrapper>
  );
}

ItemTypeFilter.propTypes = {
  onChangeType: PropTypes.func.isRequired,
  activeItemType: PropTypes.string.isRequired,
};

export default ItemTypeFilter;
