import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: 135px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.mainColor};
  font-size: 13px;
  display: flex;
  justify-content: center;
  a {
    color: currentColor;
  }
`;

const FooterItem = styled.div`
  &:first-child:after {
    content: "•";
    margin-left: 18px;
    margin-right: 18px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterItem>©2019 Market</FooterItem>
      <FooterItem>Privacy Policy</FooterItem>
    </FooterWrapper>
  );
}

export default Footer;
