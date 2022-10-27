import React from "react";

import {button} from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/button",
  component: button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: "color"},
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "button",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: "extra-large",
  label: "button",
  backgroundColor: "pink",
};
