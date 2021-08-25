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
  const banks = [
    {
      name: "GTBank",
      imageUrl: "./images/banks/gtb.svg",
    },
    {
      name: "Zenith Bank",
      imageUrl: "./images/banks/zenith.svg",
    },
    {
      name: "Fidelity Bank",
      imageUrl: "./images/banks/fidelity.svg",
    },
    {
      name: "Kuda Bank",
      imageUrl: "./images/banks/kuda.svg",
    },
    {
      name: "Polaris Bank",
      imageUrl: "./images/banks/polaris.svg",
    },
    {
      name: "Wallets Africa",
      imageUrl: "./images/banks/gtb.svg",
    },
    {
      name: "Access Bank",
      imageUrl: "./images/banks/access.svg",
    },
    {
      name: "UBA",
      imageUrl: "./images/banks/gtb.svg",
    },
    {
      name: "FCMB",
      imageUrl: "./images/banks/gtb.svg",
    },
  ];
  const [expanded, setExpanded] = useState("Fidelity Bank");

  return (
    <div className={permissionsClassName}>
      <ul>
        {banks.map((bank) => (
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
