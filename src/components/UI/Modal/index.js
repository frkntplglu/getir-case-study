import { useEffect } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import mediaQueries from "../../../styles/mediaQueries.js";

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
  min-height: 500px;
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

function Modal({ onClose, isShown, children }) {
  useEffect(() => {
    const handleEscapeClose = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keyup", handleEscapeClose, false);
    return () => {
      window.removeEventListener("keyup", handleEscapeClose, false);
    };
  }, [onClose]);

  if (!isShown) return null;
  return ReactDom.createPortal(
    <ModalOverlay>
      <ModalContent>
        <ModalButton onClick={onClose}>X</ModalButton>
        modal içerik burada
        {children}
      </ModalContent>
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default Modal;
