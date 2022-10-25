import React from "react";

import {TextBox} from "./TextBox";

export default {
  title: "Personal/TextBox",
  component: TextBox,
  argTypes: {},
};

const Template = (args) => <TextBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "#749e64",
};
