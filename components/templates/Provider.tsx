"use client";
import React from "react";
import { store } from "states/store";
import { Provider } from "react-redux";

const ProviderComponent = ({
  children,
}: {
  children: JSX.Element | React.ReactNode;
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderComponent;
