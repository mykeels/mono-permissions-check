import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

/**
 * @param {object} props
 * @param {any} props.className
 */
export const PermissionList = ({ className }) => {
  const permissionsClassName = classnames(
    "bg-m-gray-400 py-1 px-4 rounded font-mono h-96",
    className
  );

  return (
    <div className={permissionsClassName}>
      <ul>
        <li className="border-b border-white">

        </li>
      </ul>
    </div>
  );
};

PermissionList.propTypes = {
  className: PropTypes.any,
};
