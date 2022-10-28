import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  border: 0;
  border-radius: 3rem;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
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
  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBackgroundColor};
  }
`;

export const ButtonRound = ({
  color,
  hoverColor,
  backgroundColor,
  hoverBackgroundColor,
  size,
  label,
  ...props
}) => {
  return (
    <Button
      type="button"
      className={`${size}`}
      color={color}
      hoverColor={hoverColor}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
    >
      {label}
    </Button>
  );
};

ButtonRound.propTypes = {
  /**
   * What text color to use
   */
  color: PropTypes.string,
  /**
   * What text hover color to use
   */
  hoverColor: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What background hover color to use
   */
  hoverBackgroundColor: PropTypes.string,
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

ButtonRound.defaultProps = {
  color: "white",
  hoverColor: "black",
  backgroundColor: "black",
  hoverBackgroundColor: "white",
  size: "medium",
  onClick: undefined,
};
