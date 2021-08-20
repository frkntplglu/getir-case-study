import styled from "styled-components";
import SidebarBox from "../../components/SidebarBox";
import Checkbox from "../../components/UI/Checkbox";

const SidebarWrapper = styled.aside`
  margin-right: 16px;
  max-width: 100%;
  width: 296px;
  flex-shrink: 0;
`;

function Sidebar() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <SidebarWrapper>
      <SidebarBox title="Sorting">
        <ul>
          <li>Sort 1</li>
          <li>Sort 2</li>
          <li>Sort 3</li>
          <li>Sort 4</li>
          <li>Sort 1</li>
          <li>Sort 2</li>
          <li>Sort 3</li>
          <li>Sort 4</li>
        </ul>
      </SidebarBox>
      <SidebarBox title="Brands">
        <Checkbox
          htmlFor="Brand1"
          labelText="Mercedes"
          value="mercedes"
          handleCheckboxChange={handleChange}
          isSelected={false}
          isDisabled={false}
        />
        <Checkbox
          htmlFor="Brand2"
          labelText="Ferrari"
          value="ferrari"
          handleCheckboxChange={handleChange}
          isSelected={false}
          isDisabled={false}
        />
        <Checkbox
          htmlFor="Brand3"
          labelText="Lamborghini"
          value="lambo"
          handleCheckboxChange={handleChange}
          isSelected={false}
          isDisabled={false}
        />
        <Checkbox
          htmlFor="Brand4"
          labelText="Ford"
          value="ford"
          handleCheckboxChange={handleChange}
          isSelected={false}
          isDisabled={false}
        />
      </SidebarBox>
      <SidebarBox title="Tags">
        <ul>
          <li>Tag 1</li>
          <li>Tag 2</li>
          <li>Tag 3</li>
          <li>Tag 4</li>
          <li>Tag 1</li>
          <li>Tag 2</li>
          <li>Tag 3</li>
          <li>Tag 4</li>
          <li>Tag 1</li>
          <li>Tag 2</li>
          <li>Tag 3</li>
          <li>Tag 4</li>
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
