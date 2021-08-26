import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { PermissionList, PermissionSearch } from "./components";
import { useQuery } from "react-query";

/**
 * @param {object} props
 * @param {any} props.className
 * @param {(search: string) => Promise<import("./components").Bank[]>} props.getBanks
 */
export const PermissionWidget = ({ className, getBanks }) => {
  const permissionsClassName = classnames(
    "inline-block lg:bg-m-gray-400",
    "py-1 px-4 rounded-3xl font-mono min-h-96 text-left w-full lg:w-128",
    className
  );
  const [search, setSearch] = useState("");
  const { data: banks, isLoading } = useQuery(["getBanks", search], () =>
    getBanks(search)
  );

  return (
    <div className={permissionsClassName}>
      <div className="hidden lg:block">
        <PermissionSearch onSearchChange={setSearch} isLoading={isLoading} />
      </div>
      <div className="lg:py-4 lg:px-2">
        <PermissionList banks={banks} />
      </div>
    </div>
  );
};

PermissionWidget.propTypes = {
  className: PropTypes.any,
  getBanks: PropTypes.func,
};

PermissionWidget.defaultProps = {
  getBanks: async () => [],
};
