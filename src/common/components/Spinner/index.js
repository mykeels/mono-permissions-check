import "./styles.css";

import classnames from "classnames/dedupe";
import PropTypes from "prop-types";
import React from "react";

/**
 *
 * @param {{ [key: string]: any }} props
 * @returns {JSX.Element}
 */
export const Spinner = ({ size, borderWidth, borderColor, className }) => {
  const spinnerClasses = classnames("spinner inline-block", className);
  return (
    <div
      className={spinnerClasses}
      style={{ width: size, height: size, borderWidth, borderColor }}
    ></div>
  );
};

Spinner.propTypes = {
  size: PropTypes.any,
  borderWidth: PropTypes.any,
  borderColor: PropTypes.any,
  className: PropTypes.any
};

Spinner.defaultProps = {
  size: "1.5rem",
  borderWidth: 3,
  borderColor: "unset"
};
