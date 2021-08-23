import PropTypes from "prop-types";
import styled from "styled-components";
import ReactDom from "react-dom";
import useDisableBodyScroll from "../../../hooks/useDisableBodyScroll";

const drawerRoot = document.getElementById("drawer-root");

const DrawerOverlay = styled.div`
  background-color: rgba(30, 164, 206, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

const DrawerContent = styled.div`
  background-color: #fff;
  width: 300px;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
  overflow: auto;
`;

const DrawerCloseBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: ${(props) => props.theme.commonRadius};
  background-color: #ddd;
  color: ${(props) => props.theme.colors.textColor};
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: 700;
  cursor: pointer;
`;

function Drawer({ children, onClose, isOpen }) {
  useDisableBodyScroll(isOpen);

  if (!isOpen) return null;
  return ReactDom.createPortal(
    <DrawerOverlay>
      <DrawerContent>
        <DrawerCloseBtn onClick={onClose}>X</DrawerCloseBtn>
        {children}
      </DrawerContent>
    </DrawerOverlay>,
    drawerRoot
  );
}

Drawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

Drawer.defaultProps = {
  isOpen: false,
};

export default Drawer;
