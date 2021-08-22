import ContentLoader from "react-content-loader";
import styled from "styled-components";

const ModalLoaderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ModalLoader = (props) => (
  <ModalLoaderWrapper>
    <ContentLoader
      speed={2}
      width={578}
      height={412}
      viewBox="0 0 578 412"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="578" height="250" />
      <rect x="0" y="260" rx="0" ry="0" width="300" height="35" />
      <rect x="0" y="310" rx="0" ry="0" width="578" height="12" />
      <rect x="0" y="330" rx="0" ry="0" width="274" height="12" />
      <rect x="0" y="370" rx="0" ry="0" width="70" height="40" />
      <rect x="460" y="370" rx="0" ry="0" width="120" height="50" />
    </ContentLoader>
  </ModalLoaderWrapper>
);

export default ModalLoader;
