import PropTypes from "prop-types";
import styled from "styled-components";

const ProductImageWrapper = styled.div`
  border: 1px solid #f3f0fe;
  border-radius: 12px;
  padding: 16px;
`;

const ProductImageTag = styled.img`
  width: 100%;
`;

function ProductImage({ src, altDescription }) {
  return (
    <ProductImageWrapper>
      <ProductImageTag src={src} alt={altDescription} />
    </ProductImageWrapper>
  );
}

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  altDescription: PropTypes.string.isRequired,
};

export default ProductImage;
