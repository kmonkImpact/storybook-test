import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: black;
  &.small {
    font-size: 1rem;
    padding: 1rem 1.5rem;
  }
  &.medium {
    font-size: 1.125rem;
    padding: 1.125rem 1.625rem;
  }
  &.large {
    font-size: 1.25rem;
    padding: 1.25rem 1.75rem;
  }
`;

export const ButtonBox = ({backgroundColor, size, label, ...props}) => {
  return (
    <Button
      type="button"
      className={`${size}`}
      style={backgroundColor && {backgroundColor}}
    >
      {label}
    </Button>
  );
};

ButtonBox.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ButtonBox.defaultProps = {
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
};
