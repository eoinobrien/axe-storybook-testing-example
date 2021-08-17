import React from "react";
import AltTag from "./index";

export default {
  title: "Image Alt",
  component: AltTag
};

export const NoAlt = () => <AltTag />;

export const NoAltSkipped = () => <AltTag />;

NoAltSkipped.parameters = {
  axe: {
     skip: true,
   },
};

export const WithAlt = () => (
  <AltTag alt="Cat sleeping in a window, while the sun shines in" />
);
