import React, { useState } from "react";
import { Button, Divider, message, Modal } from "antd";
import BoyIcon from "../images/boyIcon.svg";
import GirlIcon from "../images/girlIcon.svg";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 18px;
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.p`
  font-size: 0.5rem;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const SubContent = styled.p`
  font-size: 0.4rem;
  font-weight: 800;
  line-height: 1.75;
  opacity: 0.75;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 42px;
`;

const Description = styled.p`
  font-size: 0.4rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
  margin-left: 7px;
  text-align: left;
`;

const ButtonWrap = styled.div`
  margin-bottom: 0rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;
const ContactButton = styled.div`
  width: 10.75rem;
  padding: 1rem 0;
`;

const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  return (
    <Wrapper>
          <br />
          <br />
      <Title>마음 전하는 곳</Title>
      <ButtonWrap>
        <ContactButton onClick={() => setGroomVisible(true)}>
          <img
          src={BoyIcon}
          width={40}
          height={40}
          />
          <br />
          <SubContent>신랑측 계좌번호</SubContent>
        </ContactButton>
        <ContactButton onClick={() => setBrideVisible(true)}>
          <img
          src={GirlIcon}
          width={40}
          height={40}
          />
          <br />
          <SubContent>신부측 계좌번호</SubContent>
        </ContactButton>
      </ButtonWrap>
      <Modal
        title={<b>신랑측 계좌번호</b>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div>
          <b>부 : {GROOM_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0, justifyContent: 'center' }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>모 : {GROOM_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신랑 {GROOM_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
      <Modal
        title={<b>신부측 계좌번호</b>}
        visible={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={[
          <Description>
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div>
          <b>부 : {BRIDE_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>모 : {BRIDE_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신부 {BRIDE_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
    </Wrapper>
  );
};

export default CongratulatoryMoney;
