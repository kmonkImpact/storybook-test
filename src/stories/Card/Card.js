import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 25%;
  border: red 5px solid;
  background-color: darkblue;
  color: white;
  margin-top: 28px;
  margin-bottom: 28px;
`;

export const Card = ({}) => {
  return (
    <CardContainer>
      <h2>Card</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </CardContainer>
  );
};

export default Card;
