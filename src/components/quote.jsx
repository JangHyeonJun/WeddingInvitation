import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
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
          src={MailIcon}
          width={50}
          height={50}
        />
      </Icon>
    </Wrapper>
  );
};

export default Quote;
