import React from "react";
import {Button} from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {control: "color"},
    hoverColor: {control: "color"},
    backgroundColor: {control: "color"},
    hoverBackgroundColor: {control: "color"},
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  size: "medium",
  label: "Medium Button",
  shape: "round",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large Button",
  shape: "round",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small Button",
  shape: "box",
};
