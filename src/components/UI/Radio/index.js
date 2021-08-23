import PropTypes from "prop-types";
import styled from "styled-components";
import radioCheck from "../../../assets/radiocheck.svg";

const RadioInputWrapper = styled.label`
  display: block;
  width: 100%;
  cursor: pointer;
  margin-bottom: 18px;
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
  opacity: 0;
  &:checked + span:before {
    border-color: ${(props) => props.theme.colors.mainColor};
  }
  &:checked + span:after {
    content: "";
    background: url(${radioCheck}) no-repeat center center;
    display: block;
    width: 22px;
    height: 22px;

    position: absolute;
    left: 0px;
  }
`;

const RadioLabel = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  color: ${(props) => props.theme.colors.filterTextColor};
  &:before {
    content: "";
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 100%;
    margin-right: 9px;
    border: 2px solid #dfdee2;
    box-sizing: border-box;
    transition: all 0.3s ease 0s;
  }
  &:after {
    transition: all 0.3s ease 0s;
  }
`;

function Radio({ value, name, labelText, handleOnChange, isDisabled }) {
  return (
    <RadioInputWrapper>
      <RadioInput
        type="checkbox"
        value={value}
        name={name}
        onChange={handleOnChange}
        disabled={isDisabled}
      />
      <RadioLabel>{labelText}</RadioLabel>
    </RadioInputWrapper>
  );
}

Radio.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  labelText: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

export default Radio;
