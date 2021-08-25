import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import logoSVG from "../../../assets/images/logo.svg";
import arrowUpRightSVG from "./assets/images/arrow-up-right.svg";

/**
 *
 * @param {object} props
 * @param {any} props.className
 */
export const Nav = ({ className }) => {
  const navClassName = classnames(
    "block w-full bg-m-blue-400 p-12",
    "text-white",
    className
  );

  return (
    <div className={navClassName}>
      <div className="inline-block w-1/2 align-top">
        <img src={logoSVG} alt="Mono Logo" />
      </div>
      <div className="inline-block w-1/2 align-top text-right">
        <a href="#/" className="relative">
          <span className="hidden md:inline">What is a Statement Page?</span>
          <span className="inline md:hidden">Help?</span>
          <img className="inline pl-3 align-middle mb-1" src={arrowUpRightSVG} alt="Arrow up right" />
        </a>
      </div>
    </div>
  );
};

Nav.propTypes = {
  className: PropTypes.any,
};
