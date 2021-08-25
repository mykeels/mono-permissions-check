import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { BankPermission } from "../BankPermission";

/**
 * @param {object} props
 * @param {any} props.className
 */
export const PermissionList = ({ className }) => {
  const permissionsClassName = classnames(
    "bg-m-gray-500 py-1 px-4 rounded font-mono border border-white shadow",
    className
  );
  const [expanded, setExpanded] = useState("Fidelity Bank");

  return (
    <div className={permissionsClassName}>
      <ul>
        <li>
          <BankPermission
            bankName="GTBank"
            expanded={expanded}
            onExpandChange={setExpanded}
          />
        </li>
        <li>
          <BankPermission
            bankName="Zenith Bank"
            expanded={expanded}
            onExpandChange={setExpanded}
          />
        </li>
        <li>
          <BankPermission
            bankName="Fidelity Bank"
            expanded={expanded}
            onExpandChange={setExpanded}
          />
        </li>
        <li>
          <BankPermission
            bankName="Kuda Bank"
            expanded={expanded}
            onExpandChange={setExpanded}
          />
        </li>
        <li>
          <BankPermission
            bankName="Polaris Bank"
            expanded={expanded}
            onExpandChange={setExpanded}
          />
        </li>
        <li>
          <BankPermission
            bankName="Wallets Africa"
            expanded={expanded}
            onExpandChange={setExpanded}
          />
        </li>
      </ul>
    </div>
  );
};

PermissionList.propTypes = {
  className: PropTypes.any,
};
