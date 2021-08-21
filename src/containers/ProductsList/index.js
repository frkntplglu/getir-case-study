import { useEffect } from "react";
import styled from "styled-components";
import Product from "../../components/Product";
import { getAllProducts } from "../../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";

const ProductListWrapper = styled.div`
  width: 608px;
  flex-shrink: 0;
`;

const ProductListTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.pageTitle};
  margin-bottom: 16px;
`;

const ProductListInnerWrapper = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  display: flex;
  padding: 19px 19px 0 19px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 16px;
`;

function ProductsList() {
  const dispatch = useDispatch();
  const { loading, items } = useSelector((state) => state.productsList);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  if (loading) return <div>Yükleniyor....</div>;
  return (
    <ProductListWrapper>
      <ProductListTitle>Products</ProductListTitle>
      <ProductListInnerWrapper>
        {items.map((product) => (
          <Product
            key={product.slug}
            data={product}
            productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png"
          />
        ))}
      </ProductListInnerWrapper>
    </ProductListWrapper>
  );
}

export default ProductsList;
