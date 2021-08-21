import PropTypes from "prop-types";
import styled from "styled-components";

const typeList = {
  warning: "#fff3cd",
  error: "#f8d7da",
  info: "#cce5ff",
};
const AlertWrapper = styled.div`
  background-color: ${(props) => typeList[props.type]};
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.3);
  margin-bottom: 19px;
  line-height: 20px;
  box-sizing: border-box;
`;

function Alert({ type, children }) {
  return <AlertWrapper type={type}>{children}</AlertWrapper>;
}

Alert.propTypes = {
  type: PropTypes.oneOf(["warning", "error", "info"]),
};

Alert.defaultProps = {
  type: "warning",
};

export default Alert;
