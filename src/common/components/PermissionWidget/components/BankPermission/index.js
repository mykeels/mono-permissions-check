import "./style.css";

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import chevronUpSVG from "./assets/images/chevron-up.svg";
import chevronDownSVG from "./assets/images/chevron-down.svg";

/**
 * @param {object} props
 * @param {any} props.className
 * @param {string|boolean} props.expanded
 * @param {(expanded: string) => any} props.onExpandChange
 * @param {string} props.bankName
 * @param {string} props.bankImageUrl
 */
export const BankPermission = ({
  className,
  bankName,
  bankImageUrl,
  expanded,
  onExpandChange,
}) => {
  const bpClassName = classnames("block p-2 font-mono", className);
  const isExpanded = expanded === bankName || expanded === true;

  return (
    <div className={bpClassName}>
      <div
        className="block py-2 border-b border-white"
        role="button"
        onClick={() => onExpandChange(bankName)}
      >
        <div className="inline-block w-5/6 align-top">
          <img className="inline" src={bankImageUrl} alt="Bank" />
          <span className="px-2 pl-2">{bankName}</span>
        </div>
        <div className="inline-block w-1/6 align-top text-right">
          {isExpanded ? (
            <img className="inline" src={chevronUpSVG} alt="Collapse" />
          ) : (
            <img className="inline" src={chevronDownSVG} alt="Expand" />
          )}
        </div>
      </div>
      {isExpanded ? (
        <div className="block py-2">
          <p className="font-semibold py-2">
            Floof will be able to access your:
          </p>
          <ul className="list-none">
            <li className="list-check py-1">Account holder named</li>
            <li className="list-check py-1">Account type</li>
            <li className="list-check py-1">Account transaction history</li>
            <li className="list-check py-1">Account balance</li>
          </ul>
          <div className="text-right">
            <a href="/#" className="bg-m-blue-700 text-white px-6 py-2 rounded">
              More info
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

BankPermission.propTypes = {
  className: PropTypes.any,
  expanded: PropTypes.oneOf(PropTypes.bool, PropTypes.string),
  onExpandChange: PropTypes.func,
  bankName: PropTypes.string,
  bankImageUrl: PropTypes.string
};

BankPermission.defaultProps = {
  onExpandChange: () => {},
};
