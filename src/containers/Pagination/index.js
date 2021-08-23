import PropTypes from "prop-types";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  margin-top: 32px;
`;

const PaginationButton = styled.button`
  background: none;
  min-width: 32px;
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

const PrevBtn = styled(PaginationButton)`
  margin-right: 34px;
`;

const NextBtn = styled(PaginationButton)`
  margin-left: 34px;
`;

function Pagination({ totalItem, itemPerPage, paginate, currentPage }) {
  const pageNumbers = [];
  const totalPage = Math.ceil(totalItem / itemPerPage);
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      {currentPage !== 1 ? (
        <PrevBtn onClick={() => paginate(currentPage - 1)}>Prev</PrevBtn>
      ) : null}

      {pageNumbers.map((number) => (
        <PaginationButton
          className={currentPage === number ? "active" : null}
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </PaginationButton>
      ))}
      {currentPage !== totalPage ? (
        <NextBtn onClick={() => paginate(currentPage + 1)}>Next</NextBtn>
      ) : null}
    </PaginationWrapper>
  );
}

Pagination.propTypes = {
  totalItem: PropTypes.number,
  itemPerPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
