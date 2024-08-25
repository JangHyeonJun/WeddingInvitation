import React from "react";
import styled from "styled-components";
import TadaIcon from "../images/tada.svg";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: visible;
  margin: 0 auto;
  position: relative;
`;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  transform: translateY(35%);
`;

const Quote = () => {
  return (
    <Wrapper>
      <br />
      <Icon>
        <img
          src={TadaIcon}
          width={50}
          height={50}
        />
      </Icon>
    </Wrapper>
  );
};

export default Quote;
