import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
  width: 50vw;
  height: 50vh;
  background-color: ${(props) => props.color};
`;

export const TextBox = ({color}) => {
  return (
    <Box color={color}>
      <h2>Text Box Pick a Color</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Box>
  );
};

export default TextBox;
