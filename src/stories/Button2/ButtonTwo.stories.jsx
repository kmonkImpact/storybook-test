import React from "react";

import {ButtonTwo} from "./ButtonTwo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Personal/ButtonTwo",
  component: ButtonTwo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: "color"},
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonTwo {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "ButtonTwo",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "ButtonTwo",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "ButtonTwo",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "ButtonTwo",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: "extra-large",
  label: "ButtonTwo",
  backgroundColor: "pink",
};
