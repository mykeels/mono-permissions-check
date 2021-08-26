import "./style.css";

import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { BankPermission } from "../BankPermission";

/**
 * @param {object} props
 * @param {any} props.className
 * @param {Bank[]} props.banks
 */
export const PermissionList = ({ className, banks }) => {
  const permissionsClassName = classnames(
    "bg-m-gray-500 py-1 px-4 rounded font-mono border border-white shadow",
    className
  );
  const [expanded, setExpanded] = useState("Fidelity Bank");

  return (
    <div className={permissionsClassName}>
      <ul className="permissions-list-container v-scroll overflow-auto">
        {banks?.map((bank) => (
          <li key={bank.name}>
            <BankPermission
              bankName={bank.name}
              bankImageUrl={bank.imageUrl}
              expanded={expanded}
              onExpandChange={setExpanded}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

PermissionList.propTypes = {
  className: PropTypes.any,
};

/**
 * @typedef {object} Bank
 * @property {string} name
 * @property {string} imageUrl
 */
