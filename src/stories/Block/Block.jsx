import React from "react";
// import "./block.css";
import styled from "@emotion/styled";

const BlockContainer = styled.div`
  background-color: hotpink;
  width: 100%;
  margin-top: 28px;
  margin-bottom: 28px;
  padding: 32px;
`;

export const Block = ({header}) => {
  return (
    <BlockContainer>
      <h1>{header}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </BlockContainer>
  );
};

export default Block;
