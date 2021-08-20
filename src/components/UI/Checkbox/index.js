import PropTypes from "prop-types";
import styled from "styled-components";
import check from "../../../assets/check.svg";

const CheckboxInputWrapper = styled.label`
  display: block;
  width: 100%;
  cursor: pointer;
  margin-bottom: 18px;
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
  opacity: 0;
  &:checked + span:before {
    background: ${(props) => props.theme.colors.mainColor};
  }
  &:checked + span:after {
    content: "";
    background: url(${check}) no-repeat center center;
    display: block;
    width: 22px;
    height: 22px;

    position: absolute;
    left: 0px;
  }
`;

const CheckboxLabel = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  color: ${(props) => props.theme.colors.filterTextColor};
  &:before {
    content: "";
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 2px;
    margin-right: 9px;
    box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
    transition: all 0.3s ease 0s;
  }
  &:after {
    transition: all 0.3s ease 0s;
  }
`;

function Checkbox({
  htmlFor,
  value,
  labelText,
  handleCheckboxChange,
  isDisabled,
}) {
  return (
    <CheckboxInputWrapper htmlFor={htmlFor}>
      <CheckboxInput
        type="checkbox"
        id={htmlFor}
        value={value}
        onChange={handleCheckboxChange}
        disabled={isDisabled}
      />
      <CheckboxLabel>{labelText}</CheckboxLabel>
    </CheckboxInputWrapper>
  );
}

export default Checkbox;

Checkbox.propTypes = {
  htmlFor: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelText: PropTypes.string,
  handleCheckboxChange: PropTypes.func,
  isDisabled: PropTypes.bool,
};
