import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../../components/Product";
import { getAllProducts } from "../../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import SpinnerIcon from "../../components/Icons/Spinner";
import Alert from "../../components/UI/Alert";
import theme from "../../styles/theme";
import Modal from "../../components/UI/Modal";

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
  const [isShowModal, setIsShowModal] = useState(true);
  const dispatch = useDispatch();
  const { loading, items, error } = useSelector((state) => state.productsList);

  const handleModalClose = () => {
    setIsShowModal(!isShowModal);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <ProductListWrapper>
      <ProductListTitle>Products</ProductListTitle>
      <Modal onClose={handleModalClose} isShown={isShowModal} />
      <ProductListInnerWrapper>
        {error ? <Alert type="error">{error}</Alert> : null}
        {loading ? (
          <SpinnerIcon width={64} height={64} fill={theme.colors.mainColor} />
        ) : (
          items.map((product) => (
            <Product
              key={product.slug}
              data={product}
              productImage="https://cdn.shopify.com/s/files/1/0250/8541/1390/products/1041_Product_1024x1024@2x.jpg?v=1619075008"
            />
          ))
        )}
      </ProductListInnerWrapper>
    </ProductListWrapper>
  );
}

export default ProductsList;
