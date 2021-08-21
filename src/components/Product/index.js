import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addItemToCart } from "../../actions/cartActions";
import AddCart from "./AddCart";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";

const ProductWrapper = styled.div`
  width: 124px;
  margin-bottom: 21px;
`;

function Product({ data, productImage }) {
  const dispatch = useDispatch();
  const addToCart = (data) => {
    dispatch(addItemToCart(data));
  };
  return (
    <ProductWrapper>
      <ProductImage src={productImage} />
      <ProductPrice>₺ {data.price}</ProductPrice>
      <ProductTitle>{data.name}</ProductTitle>
      <AddCart onClick={() => addToCart(data)}>Add</AddCart>
    </ProductWrapper>
  );
}

export default Product;
