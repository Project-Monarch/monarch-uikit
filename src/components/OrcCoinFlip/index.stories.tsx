import React from "react";
import OrcCoinFlip from "./OrcCoinFlip";

export default {
  title: "Components/OrcCoinFlip",
  component: OrcCoinFlip,
  argTypes: {},
};

export const Default: React.FC = () => {
  return <OrcCoinFlip iconsWidth="50px" />;
};
