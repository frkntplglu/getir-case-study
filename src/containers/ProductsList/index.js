import styled from "styled-components";
import Product from "../../components/Product";

const ProductListWrapper = styled.div``;

const ProductListTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.pageTitle};
  margin-bottom: 16px;
`;

const ProductListInnerWrapper = styled.div`
  background-color: #fff;
  border-radius: 2px;
  display: flex;
  width: 608px;
  padding: 19px 19px 0 19px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 16px;
`;

function ProductsList() {
  return (
    <ProductListWrapper>
      <ProductListTitle>Products</ProductListTitle>
      <ProductListInnerWrapper>
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
        <Product productImage="https://dragonflyeditorial.com/wp-content/uploads/2018/10/headphones.png" />
      </ProductListInnerWrapper>
    </ProductListWrapper>
  );
}

export default ProductsList;
