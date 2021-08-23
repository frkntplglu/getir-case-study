import PropTypes from "prop-types";
import styled from "styled-components";
import Arrowleft from "../../components/Icons/Arrowleft";
import Arrowright from "../../components/Icons/Arrowright";

const PaginationWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

const PaginationButton = styled.button`
  background: none;
  min-width: 32px;
  height: 40px;
  border-radius: ${(props) => props.theme.commonRadius};
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

const PrevNextBtn = styled(PaginationButton)`
  display: inline-flex;
  align-items: center;
  svg path {
    fill: #697488;
  }
  &:hover {
    svg path {
      fill: ${(props) => props.theme.colors.mainColor};
    }
  }
`;

const PrevBtn = styled(PrevNextBtn)`
  margin-right: 34px;
  svg {
    margin-right: 13px;
  }
`;

const NextBtn = styled(PrevNextBtn)`
  margin-left: 34px;
  svg {
    margin-left: 13px;
  }
`;

function Pagination({ totalItem, itemPerPage, paginate, currentPage }) {
  const pageNumbers = [];
  const totalPage = Math.ceil(totalItem / itemPerPage);
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  const pageLeft = pageNumbers.slice(0, 4);
  const pageRight = pageNumbers.slice(-4);

  return (
    <PaginationWrapper>
      {currentPage !== 1 ? (
        <PrevBtn onClick={() => paginate(currentPage - 1)}>
          <Arrowleft /> Prev
        </PrevBtn>
      ) : null}

      {pageLeft.map((number) => (
        <PaginationButton
          className={currentPage === number ? "active" : null}
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </PaginationButton>
      ))}
      {currentPage > 4 && currentPage < pageNumbers[pageNumbers.length - 4] ? (
        <>
          <PaginationButton>..</PaginationButton>
          <PaginationButton className="active">{currentPage}</PaginationButton>
          <PaginationButton>..</PaginationButton>
        </>
      ) : (
        <PaginationButton>...</PaginationButton>
      )}

      {pageRight.map((number) => (
        <PaginationButton
          className={currentPage === number ? "active" : null}
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </PaginationButton>
      ))}

      {currentPage !== totalPage ? (
        <NextBtn onClick={() => paginate(currentPage + 1)}>
          Next <Arrowright />
        </NextBtn>
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
