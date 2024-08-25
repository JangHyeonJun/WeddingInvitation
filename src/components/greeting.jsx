import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import TwoGi from "../images/twogi.svg";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-size: 0.45rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.4rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 0.45rem;
  font-weight: 600;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;


const IconTray = styled.div`
  display: flex;
  justify-content: center; /* Centers the content horizontally */
  align-items: center; /* Centers the content vertically if needed */
  margin-bottom: 20px; /* Adjust spacing as needed */
`;


const Greeting = () => {
  return (
    <Wrapper>
      <Divider>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </Divider>
      <Content>
        함께 맞이하는 네번째 겨울,
        <br />
        따뜻한 관심과 축복속에
        <br />
        새로운 여행을 떠나려고 합니다.
        <br />
        <br />
        <br />
        <br />
        <Title>행복하게 살겠습니다.</Title>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Content>
      <IconTray>
        <img
          src={TwoGi}
          width={30}
          height={30}
        />
      </IconTray>
      <br />
      <GroomBride>
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME} 의 차남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME} 의 장녀 {BRIDE_NAME}
      </GroomBride>
      <br />
      <br />
      <br />
      
      <GroomBride>
      Gallery
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
