import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  max-width: 100%;
`;

const Title = styled.span`
  font-size: 0.7rem;
  color: var(--pink-color);
  font-weight: bold;
  opacity: 0.85;
`;

const Content = styled.p`
  font-size: 0.4rem;
  color: var(--pink-color);
  white-space: nowrap;
  text-align: center;
  max-width: 100%;
`;

const Map = styled.div`
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

  const IconTray = styled.div`
  display: flex;
  justify-content: center; /* Centers the content horizontally */
  align-items: center; /* Centers the content vertically if needed */
  margin-top: 50px;
  margin-bottom: 20px; /* Adjust spacing as needed */
  `;

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 15 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Content>
        2024년 12월 1일 오후 12시 40분<br/>
        더컨벤션 영등포, 1층 그랜드볼룸
        <br/>
        <br/>
      </Content>
      <Map
        id="daumRoughmapContainer1722790509020"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <IconTray>
        <span className="tf xxsmall man-with-tuxido"></span>
        <span className="tf xxsmall woman-with-veil"></span>
      </IconTray>
      
      <Content>
        두 사람 앞에 펼쳐질 장밋빛 나날들을
      </Content>
      <Content>
        함께 축복해주신 모든 분들께
      </Content>
      <Content>
        감사를 전합니다.
        <br/>
        <br/>
        <br/>
      </Content>
    </Wrapper>
  );
};

export default Location;
