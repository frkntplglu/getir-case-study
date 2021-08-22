import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../../components/Product";
import { getAllProducts } from "../../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../components/UI/Alert";
import mediaQueries from "../../styles/mediaQueries";
import SkeletonLoader from "../../components/UI/ContentLoader";
import handlePagination from "../../utils/handlePagination";
import Pagination from "../Pagination";
import ItemTypeFilter from "../../components/ItemTypeFilter";

const ProductListWrapper = styled.div`
  flex-grow: 2;
`;

const ProductListTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.pageTitleColor};
  margin-bottom: 16px;
`;

const ProductListInnerWrapper = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  display: grid;
  grid-template-columns: repeat(4, minmax(125px, 1fr));
  grid-gap: 22px;
  padding: 20px;
  margin-top: 16px;
  @media ${mediaQueries.laptop} {
    grid-template-columns: repeat(3, minmax(125px, 1fr));
  }
  @media ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function ProductsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);

  const dispatch = useDispatch();
  const { loading, items, error, totalProducts } = useSelector(
    (state) => state.productsList
  );

  const handlePaginate = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <ProductListWrapper>
      <ProductListTitle>Products</ProductListTitle>
      <ItemTypeFilter />
      <ProductListInnerWrapper>
        {error ? <Alert type="error">{error}</Alert> : null}
        {loading
          ? Array(productsPerPage)
              .fill()
              .map((loader, index) => <SkeletonLoader key={index} />)
          : handlePagination(items, { currentPage, productsPerPage }).map(
              (product) => (
                <Product
                  key={product.slug}
                  data={product}
                  productImage="https://cdn.shopify.com/s/files/1/0250/8541/1390/products/1041_Product_1024x1024@2x.jpg?v=1619075008"
                />
              )
            )}
      </ProductListInnerWrapper>
      <Pagination
        currentPage={currentPage}
        totalPage={totalProducts}
        itemPerPage={productsPerPage}
        paginate={handlePaginate}
      />
    </ProductListWrapper>
  );
}

export default ProductsList;
