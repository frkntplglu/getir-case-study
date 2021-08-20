import styled from "styled-components";
import SidebarBox from "../../components/SidebarBox";

const SidebarWrapper = styled.aside`
  margin-right: 16px;
  max-width: 100%;
  width: 300px;
`;

function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarBox title="Sorting">
        <ul>
          <li>Sort 1</li>
          <li>Sort 2</li>
          <li>Sort 3</li>
          <li>Sort 4</li>
        </ul>
      </SidebarBox>
      <SidebarBox title="Brands">
        <ul>
          <li>Brand 1</li>
          <li>Brand 2</li>
          <li>Brand 3</li>
          <li>Brand 4</li>
        </ul>
      </SidebarBox>
      <SidebarBox title="Tags">
        <ul>
          <li>Tag 1</li>
          <li>Tag 2</li>
          <li>Tag 3</li>
          <li>Tag 4</li>
        </ul>
      </SidebarBox>
    </SidebarWrapper>
  );
}

export default Sidebar;
