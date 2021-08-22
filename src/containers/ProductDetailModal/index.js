import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ReactDom from "react-dom";
import styled from "styled-components";
import mediaQueries from "../../styles/mediaQueries.js";
import getirAPI from "../../services/getirAPI.js";
import { addItemToCart } from "../../actions/cartActions";
import SpinnerIcon from "../../components/Icons/Spinner";
import ModalLoader from "../../components/UI/ContentLoader/ModalLoader";
import { setModal } from "../../actions/commonActions.js";

const modalRoot = document.getElementById("modal-root");

const ModalOverlay = styled.div`
  background-color: rgba(30, 164, 206, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: white;
  border-radius: 8px;
  z-index: 1000;
  outline: 0px;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 5%) 0px 4px 24px;
  width: 608px;
  overflow: hidden;
  padding: 30px 15px;
  box-sizing: border-box;

  @media ${mediaQueries.tablet} {
    transform: translateY(-50%) translateX(0%);
    width: calc(100% - 30px);
    margin-left: 15px;
    margin-right: 15px;
    left: 0;
  }
`;

const ModalContentWrapper = styled.div``;

const ModalButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 2px;
  background-color: #ddd;
  color: ${(props) => props.theme.colors.textColor};
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: 700;
  cursor: pointer;
`;

const ModalImageWrapper = styled.div`
  max-height: 250px;
  overflow: hidden;
`;

const ModalImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 250px;
`;

const ModalTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
  margin-top: 15px;
  color: ${(props) => props.theme.colors.textColor};
`;

const ModalType = styled.span`
  background: ${(props) => props.theme.colors.mainColor};
  color: #fff;
  padding: 10px;
  border-radius: 2px;
  position: absolute;
  top: 40px;
  left: 25px;
`;

const ModalDescription = styled.div`
  color: ${(props) => props.theme.colors.textColorLight};
  line-height: 20px;
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

const ModalPrice = styled.div`
  color: ${(props) => props.theme.colors.mainColor};
  font-size: 24px;
  font-weight: 700;
`;

const ModalAddCart = styled.button`
  background-color: ${(props) => props.theme.colors.mainColor};
  width: 100px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  border-radius: 2px;
  cursor: pointer;
`;

function ProductDetailModal() {
  const [productDetail, setProductDetail] = useState([]);
  const history = useHistory();
  const { slug } = useParams();
  const { spinner } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductDetail = async () => {
      const { data } = await getirAPI.get(`/products/?slug=${slug}`);
      setProductDetail(data);
    };
    document.querySelector("body").style.overflow = "hidden";
    getProductDetail();

    return () => (document.querySelector("body").style.overflow = "auto");
  }, [slug]);

  useEffect(() => {
    const handleEscapeClose = (e) => {
      if (e.keyCode === 27) {
        history.goBack();
      }
    };
    window.addEventListener("keyup", handleEscapeClose, false);
    return () => {
      window.removeEventListener("keyup", handleEscapeClose, false);
    };
  }, [history]);

  const addToCart = () => {
    console.log(productDetail[0]);
    dispatch(addItemToCart(productDetail[0]));
  };

  const handleClose = () => {
    history.goBack();
  };

  return ReactDom.createPortal(
    <ModalOverlay>
      <ModalContent>
        {productDetail.length === 0 ? (
          <ModalLoader />
        ) : (
          productDetail.map((product) => (
            <ModalContentWrapper key={product.slug}>
              <ModalButton onClick={handleClose}>X</ModalButton>
              <ModalImageWrapper>
                <ModalImage
                  src="https://cdn.shopify.com/s/files/1/0250/8541/1390/products/1041_Product_1024x1024@2x.jpg?v=1619075008"
                  alt={product.name}
                />
              </ModalImageWrapper>
              <ModalTitle>{product.name}</ModalTitle>
              <ModalType>{product.itemType}</ModalType>
              <ModalDescription>{product.description}</ModalDescription>
              <ModalFooter>
                <ModalPrice>₺ {product.price}</ModalPrice>
                <ModalAddCart onClick={addToCart}>
                  {spinner ? (
                    <SpinnerIcon width="36" height="36" />
                  ) : (
                    "Add Cart"
                  )}
                </ModalAddCart>
              </ModalFooter>
            </ModalContentWrapper>
          ))
        )}
      </ModalContent>
    </ModalOverlay>,
    modalRoot
  );
}

export default ProductDetailModal;
