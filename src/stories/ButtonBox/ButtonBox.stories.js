import React from "react";

import {ButtonBox} from "./ButtonBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons/ButtonBox",
  component: ButtonBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: "color"},
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonBox {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  size: "medium",
  label: "Button Round",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button Round",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button Round",
};
