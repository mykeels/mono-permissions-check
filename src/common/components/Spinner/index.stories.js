import "./styles.css";

import React from "react";

import { Spinner } from "./";

export default {
  title: "Spinner",
  component: Spinner,
};

export const Index = () => <Spinner />;

export const CustomSize = () => <Spinner size="5rem" />;

export const CustomSizeAndBorder = () => (
  <Spinner size="5rem" borderWidth="7" />
);

export const CustomSizeBorderAndColor = () => (
  <Spinner size="5rem" borderWidth="7" borderColor={"yellow"} />
);

export const Multiple = () => (
  <>
    <Spinner />
    <Spinner />
    <Spinner />
  </>
);
