import React from "react";

import {ButtonRound} from "./ButtonRound";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons/ButtonRound",
  component: ButtonRound,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: "color"},
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonRound {...args} />;

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
