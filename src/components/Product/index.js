import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { addItemToCart } from "../../actions/cartActions";
import AddCart from "./AddCart";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import noImage from "../../assets/no-image-found.png";

const ProductWrapper = styled.div``;

function Product({ data, productImage }) {
  const dispatch = useDispatch();
  const addToCart = (data) => {
    dispatch(addItemToCart(data));
  };
  return (
    <ProductWrapper>
      <ProductImage src={productImage} altDescription={data.description} />
      <ProductPrice>₺ {data.price}</ProductPrice>
      <ProductTitle>{data.name}</ProductTitle>
      <AddCart onClick={() => addToCart(data)}>Add</AddCart>
    </ProductWrapper>
  );
}

Product.propTypes = {
  data: PropTypes.exact({
    tags: PropTypes.array,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    added: PropTypes.number,
    manufacturer: PropTypes.string,
    itemType: PropTypes.string.isRequired,
  }),
  productImage: PropTypes.string,
};

Product.defaultProps = {
  productImage: noImage,
};

export default Product;
