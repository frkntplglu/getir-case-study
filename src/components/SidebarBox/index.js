import styled from "styled-components";
import ScrollableContent from "../ScrollableContent";
import SidebarBoxContent from "./SidebarBoxContent";
import SidebarBoxTitle from "./SidebarBoxTitle";

const SidebarBoxWrapper = styled.div`
  margin-bottom: 28px;
`;

function SidebarBox({ title, children }) {
  return (
    <SidebarBoxWrapper>
      <SidebarBoxTitle>{title}</SidebarBoxTitle>
      <SidebarBoxContent>
        <p>Buraya input</p>
        {children}
      </SidebarBoxContent>
    </SidebarBoxWrapper>
  );
}

export default SidebarBox;
