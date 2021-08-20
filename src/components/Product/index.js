import styled from "styled-components";
import AddCart from "./AddCart";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";

const ProductWrapper = styled.div`
  width: 124px;
  margin-bottom: 21px;
`;

function Product({ productImage }) {
  const addToCart = () => {
    alert("added to basket");
  };
  return (
    <ProductWrapper>
      <ProductImage src={productImage} />
      <ProductPrice>₺ 14,99</ProductPrice>
      <ProductTitle>Rustic Beach Mug</ProductTitle>
      <AddCart onClick={addToCart}>Add</AddCart>
    </ProductWrapper>
  );
}

export default Product;
