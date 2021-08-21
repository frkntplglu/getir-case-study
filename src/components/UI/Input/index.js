import PropTypes from "prop-types";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 17px;
  width: 100%;
`;

const InputTag = styled.input`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  height: 48px;
  padding-left: 15px;
  padding-right: 15px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.textColor};
  box-sizing: border-box;
  &:placeholder {
    color: #a8a8a8;
  }
`;

function Input({ value, placeholder, handleOnChange }) {
  return (
    <InputWrapper>
      <InputTag
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </InputWrapper>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Input;
