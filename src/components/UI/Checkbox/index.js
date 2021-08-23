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
  &:disabled + div {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:checked + div:before {
    background: ${(props) => props.theme.colors.mainColor};
  }
  &:checked + div:after {
    content: "";
    background: url(${check}) no-repeat center center;
    display: block;
    width: 22px;
    height: 22px;
    position: absolute;
    left: 0px;
  }
`;

const CheckboxLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 150px;
  }
`;

const ExtraInfo = styled.small`
  color: #a8a8a8;
  font-size: 14px;
  margin-left: 5px;
`;

function Checkbox({ value, labelText, handleOnChange, isDisabled, extraInfo }) {
  return (
    <CheckboxInputWrapper>
      <CheckboxInput
        type="checkbox"
        value={value}
        onChange={handleOnChange}
        disabled={isDisabled}
      />
      <CheckboxLabel>
        <span>{labelText}</span>
        <ExtraInfo>{extraInfo ? `(${extraInfo})` : "(0)"}</ExtraInfo>
      </CheckboxLabel>
    </CheckboxInputWrapper>
  );
}

Checkbox.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  labelText: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  extraInfo: PropTypes.any,
};

export default Checkbox;
