import React from "react";

import {Block} from "./Block";

export default {
  title: "Personal/Block",
  component: Block,
  argTypes: {},
};

const Template = (args) => <Block {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  header: "Block",
};

export const Test = Template.bind({});
Test.args = {
  header: "Test",
};

export const TestTest = Template.bind({});
TestTest.args = {
  header: "Test Test",
};
