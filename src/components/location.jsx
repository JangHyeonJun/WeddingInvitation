import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--pink-color);
  font-weight: bold;
  opacity: 0.85;
`;

const Content = styled.p`
  font-size: 0.75rem;
  color: var(--pink-color);
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`
      new daum.roughmap.Lander({
        "timestamp" : "1722790509020", // Corrected quote usage
        "key" : "2k9ao",
        "mapWidth" : "640",
        "mapHeight" : "360"
      }).render();
    `);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20 20px; /* Add padding for spacing from edges */
  margin-top: 20px;
  max-width: 500px; /* Adjust the maximum width as needed */
  margin-left: auto;
  margin-right: auto;
`;

const Link = styled.a`
  text-decoration: none;
  color: #ffffff; /* Change this to your desired link color */
  background: #204231; /* Button background color */
  padding: 8px 12px; /* Reduced padding for smaller buttons */
  border-radius: 5px;
  font-size: 0.75rem;
  transition: background-color 0.3s;

  &:hover {
    background: #0c7c44; /* Hover color */
  }
`;

  const CongratulatorySection = styled.section`
  padding: 20px;
  margin-top: 20px;
  background-color: var(--pink-background);
  border-radius: 5px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  h4 {
    color: var(--pink-color); /* Title color */
    margin-bottom: 20px;
  }

  table {
    transform: translateX(-15%);
    color: var(--pink-color);
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;

    td {
      white-space: nowrap; /* Prevent line breaks */
      padding: 8px;
      text-align: left;
      font-size: 0.75rem;
    }

    button.copy-btn {
      background-color: #204231;
      color: var(--pink-color);
      border: none;
      padding: 5px 10px;
      border-radius: 3px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0c7c44;
      }
    }
  }
  `;

  const IconTray = styled.div`
  display: flex;
  justify-content: center; /* Centers the content horizontally */
  align-items: center; /* Centers the content vertically if needed */
  margin-bottom: 20px; /* Adjust spacing as needed */
  `;

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 30, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Content>
        2024년 12월 1일 오후 12시 40분
      </Content>
      <Content>
       영등포 더컨벤션 1층 그랜드볼룸 홀
       <br />
       <br />
      </Content>
      <Map
        id="daumRoughmapContainer1722790509020"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <LinksContainer>
        <Link href="https://naver.me/51YnwEa7" target="_blank" rel="noopener noreferrer">
          네이버 지도
        </Link>
        <Link href="https://naver.me/51YnwEa7" target="_blank" rel="noopener noreferrer">
          웨딩홀 약도
        </Link>
      </LinksContainer>
      <CongratulatorySection id="congratulatory">
        <h4>마음 전하는 곳</h4>
        <table>
          <tbody>
            <tr>
              <td><b>신랑측</b></td>
              <td>
                <span>국민은행 669102-01-472320 (장현준)</span>
              </td>
              <td>
                <button className="copy-btn" data-clipboard-text="669102-01-472320">복사</button>
              </td>
            </tr>
            <tr>
              <td><b>신부측</b></td>
              <td>
                <span>국민은행 867702-04-107540 (조혜인)</span>
              </td>
              <td>
                <button className="copy-btn" data-clipboard-text="867702-04-107540">복사</button>
              </td>
            </tr>
          </tbody>
        </table>
      </CongratulatorySection>
      <IconTray>
        <span className="tf xsmall man-with-tuxido"></span>
        <span className="tf xsmall woman-with-veil"></span>
      </IconTray>
      
      <Content>
        두 사람 앞에 펼쳐질 장밋빛 나날들을
      </Content>
      <Content>
        함께 축복해주신 모든 분들께
      </Content>
      <Content>
        감사를 전합니다.
      </Content>
    </Wrapper>
  );
};

export default Location;
