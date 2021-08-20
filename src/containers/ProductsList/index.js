import styled from "styled-components";
import Product from "../../components/Product";

const ProductListWrapper = styled.div`
  background-color: #fff;
  border-radius: 2px;
  display: flex;
  width: 608px;
  padding: 19px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function ProductsList() {
  return (
    <ProductListWrapper>
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
    </ProductListWrapper>
  );
}

export default ProductsList;
