import PropTypes from "prop-types";
import styled from "styled-components";
import SidebarBoxContent from "./SidebarBoxContent";
import SidebarBoxTitle from "./SidebarBoxTitle";

const SidebarBoxWrapper = styled.div`
  margin-bottom: 28px;
`;

function SidebarBox({ title, children }) {
  return (
    <SidebarBoxWrapper>
      <SidebarBoxTitle>{title}</SidebarBoxTitle>
      <SidebarBoxContent>{children}</SidebarBoxContent>
    </SidebarBoxWrapper>
  );
}

SidebarBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default SidebarBox;
