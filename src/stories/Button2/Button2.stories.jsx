import React from "react";

import {button2} from "./button2";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/button2",
  component: button2,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: "color"},
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <button2 {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "button2",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "button2",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "button2",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "button2",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: "extra-large",
  label: "button2",
  backgroundColor: "pink",
};
