import PropTypes from "prop-types";
import styled from "styled-components";
import ItemTypeFilterButton from "./ItemTypeFilterButton";

const ItemTypeFilterWrapper = styled.div`
  display: flex;
`;

function ItemTypeFilter({ onChangeType }) {
  return (
    <ItemTypeFilterWrapper>
      <ItemTypeFilterButton onClick={() => onChangeType("mug")}>
        mug
      </ItemTypeFilterButton>
      <ItemTypeFilterButton onClick={() => onChangeType("shirt")}>
        shirt
      </ItemTypeFilterButton>
    </ItemTypeFilterWrapper>
  );
}

ItemTypeFilter.propTypes = {
  onChangeType: PropTypes.func.isRequired,
};

export default ItemTypeFilter;
