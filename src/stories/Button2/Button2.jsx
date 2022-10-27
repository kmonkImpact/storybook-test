import React from "react";
import PropTypes from "prop-types";
import "./button2.css";

/**
 * Primary UI component for user interaction
 */
export const button2 = ({primary, backgroundColor, size, label, ...props}) => {
  const mode = primary
    ? "storybook-button2--primary"
    : "storybook-button2--secondary";
  return (
    <button2
      type="button2"
      className={["storybook-button2", `storybook-button2--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && {backgroundColor}}
      {...props}
    >
      {label + " Kyle"}
    </button2>
  );
};

button2.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button2 be?
   */
  size: PropTypes.oneOf(["small", "medium", "large", "extra-large"]),
  /**
   * button2 contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

button2.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default button2;
