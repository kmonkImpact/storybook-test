import React from "react";
import PropTypes from "prop-types";
import "./buttonTwo.css";

/**
 * Primary UI component for user interaction
 */
export const ButtonTwo = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-buttonTwo--primary"
    : "storybook-buttonTwo--secondary";
  return (
    <ButtonTwo
      type="button"
      className={[
        "storybook-buttonTwo",
        `storybook-buttonTwo--${size}`,
        mode,
      ].join(" ")}
      style={backgroundColor && {backgroundColor}}
      {...props}
    >
      {label + " Kyle"}
    </ButtonTwo>
  );
};

ButtonTwo.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the buttonTwo be?
   */
  size: PropTypes.oneOf(["small", "medium", "large", "extra-large"]),
  /**
   * buttonTwo contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ButtonTwo.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default ButtonTwo;
