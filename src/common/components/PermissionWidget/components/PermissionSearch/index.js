import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import magnifySVG from "./assets/images/magnifying-glass.svg";
import { Spinner } from "../../../Spinner";

/**
 * @param {object} props
 * @param {any} props.className
 * @param {(search: string) => Promise<any>} props.onSearchChange
 * @param {boolean} props.isLoading
 */
export const PermissionSearch = ({ className, onSearchChange, isLoading }) => {
  const permissionsClassName = classnames(
    "bg-m-gray-400 p-2 font-mono",
    className
  );

  return (
    <div className={permissionsClassName}>
      <div className="text-center font-semibold py-4">Choose your bank</div>
      <div className="border border-white rounded py-2 px-4 bg-m-gray-500 shadow relative">
        <img
          src={magnifySVG}
          className="inline-block p-2 pointer-events-none"
          alt="Magnify"
        />
        <input
          type="search"
          className="bg-transparent inline-block p-2 w-5/6 outline-none"
          placeholder="Search for your bank"
          onKeyUp={(e) => onSearchChange(e.currentTarget.value)}
        />
        {isLoading ? (
          <Spinner className="absolute right-0 top-0 mt-4" borderColor="#FFF" />
        ) : null}
      </div>
    </div>
  );
};

PermissionSearch.propTypes = {
  className: PropTypes.any,
  onSearchChange: PropTypes.func,
  isLoading: PropTypes.bool,
};

PermissionSearch.defaultProps = {
  onSearchChange: () => {},
};
