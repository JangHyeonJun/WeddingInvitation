import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import TwoGi from "../images/twogi.svg";
import MailIcon from "../images/mail.svg";

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
  font-size: 0.7rem;
  font-weight: bold;
  font-family: Pretendard;
  text-align: center;
  color: var(--title-color);
  line-height: 1rem;
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
        <img
          src={TwoGi}
          width={50}
          height={50}
        />
      </IconTray>
      <Content>
        그리고
        <br />
        2024년 12월 1일
        <br />
      </Content>
      <Icon>
        <img
          src={MailIcon}
          width={50}
          height={50}
        />
      </Icon>
    </Wrapper>
  );
};

export default Quote;
