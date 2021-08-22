import PropTypes from "prop-types";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  margin-top: 32px;
`;

const PaginationButton = styled.button`
  background: none;
  width: 32px;
  height: 40px;
  border-radius: 2px;
  color: #697488;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.mainColor};
  }
  &.active {
    background-color: ${(props) => props.theme.colors.mainColor};
    color: #fff;
  }
`;

function Pagination({ totalPage, itemPerPage, paginate, currentPage }) {
  const pageNumbers = [];
  console.log(totalPage);
  for (let i = 1; i <= Math.ceil(totalPage / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      {pageNumbers.map((number) => (
        <PaginationButton
          className={currentPage === number ? "active" : null}
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </PaginationButton>
      ))}
    </PaginationWrapper>
  );
}

Pagination.propTypes = {
  totalPage: PropTypes.number,
  itemPerPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
