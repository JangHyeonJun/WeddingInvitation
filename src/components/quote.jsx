import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: visible;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 0.5rem;
  font-weight: bold;
  font-family: Pretendard;
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const IconTray = styled.div`
  display: flex;
  justify-content: center; /* Centers the content horizontally */
  align-items: center; /* Centers the content vertically if needed */
  margin-bottom: 20px; /* Adjust spacing as needed */
`;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  transform: translateY(35%);
`;

const Quote = () => {
  return (
    <Wrapper>
      <IconTray>
        <span className="tf xsmall couple"></span>
      </IconTray>
      <Content>
        그리고
        <br />
        2024년 12월 1일
        <br />
      </Content>
      <Icon>
        <span class="tf wedding-hall wedding-icon"></span>
      </Icon>
    </Wrapper>
  );
};

export default Quote;
