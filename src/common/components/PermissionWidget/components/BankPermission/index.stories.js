import React, { useState } from "react";

import { BankPermission } from ".";

export default {
  title: "BankPermission",
  component: BankPermission,
  decorators: [],
};

export const Expanded = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <BankPermission
      bankName="GTBank"
      bankImageUrl="images/banks/gtb.svg"
      expanded={expanded}
      onExpandChange={() => setExpanded(!expanded)}
    />
  );
};

export const Collapsed = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BankPermission
      bankName="Zenith Bank"
      bankImageUrl="images/banks/zenith.svg"
      expanded={expanded}
      onExpandChange={() => setExpanded(!expanded)}
    />
  );
};
