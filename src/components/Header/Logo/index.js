import styled from "styled-components";
import logo from "../../../assets/logo.svg";

const LogoWrapper = styled.div``;

const LogoImage = styled.img``;

function Logo() {
  return (
    <LogoWrapper>
      <LogoImage src={logo} alt="Getir Market Case" />
    </LogoWrapper>
  );
}

export default Logo;
