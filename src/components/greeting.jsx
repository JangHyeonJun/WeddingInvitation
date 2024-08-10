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
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.5rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 0.5rem;
  font-weight: 600;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider>
        <Title>어서옵쇼</Title>
      </Divider>
      <Content>
        만수무강 하십쇼
        <br />
        내용은 아직 정하지 못했어요
        <br />
        이건 테스트페이지라 못봄
        <br />
        킬킬킬킬킬
        <br />
        곧 완성됩니다 ㅎ.
        <br />
        <br />
      </Content>
      <GroomBride>
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME} 의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME} 의 장녀 {BRIDE_NAME}
      </GroomBride>
      <br />
      <br />
      <br />
    </Wrapper>
  );
};

export default Greeting;
