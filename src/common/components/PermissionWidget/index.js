import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { PermissionList, PermissionSearch } from "./components";

/**
 * @param {object} props
 * @param {any} props.className
 */
export const PermissionWidget = ({ className }) => {
  const permissionsClassName = classnames(
    "inline-block bg-m-gray-400 py-1 px-4 rounded-3xl font-mono min-h-96 text-left md:w-128",
    className
  );

  return (
    <div className={permissionsClassName}>
      <div>
        <PermissionSearch />
      </div>
      <div className="py-4 px-2">
        <PermissionList />
      </div>
    </div>
  );
};

PermissionWidget.propTypes = {
  className: PropTypes.any,
};
