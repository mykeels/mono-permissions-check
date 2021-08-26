import React from "react";

import { PermissionList } from ".";
import { banks } from "../../../../data/banks";

export default {
  title: "PermissionList",
  component: PermissionList,
  decorators: [],
};

export const Index = () => <PermissionList banks={banks} />;
