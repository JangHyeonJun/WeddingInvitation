import React, { useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import PhotoGallery from "../components/GalleryWrap";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";
import "../styles/global.css";
import "../styles/pretendard.css";
import "../styles/style.css";

import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";

import AOS from "aos";
import "aos/dist/aos.css";

const Wrapper = styled.div`
  background: var(--pink-background);
`;

const DarkGradientWrapper = styled.div`
  background: linear-gradient(
    rgba(41, 47, 51, 1) 100%,
    rgba(41, 47, 51, 1) 50%,
    rgba(41, 47, 51, 1) 0%
  );
  width: 100%;
  text-align: center;
  font-family: pretendard;
`

const PinkWrapper = styled.div`
  background: var(--pink-background); 
  color: var(--pink-color);
  width: 100%;
  text-align:center;
`;

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Fixed typo: romoveChile to removeChild
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration
    });
  });

  return (
    <Wrapper>

      <Helmet>
        <title>현준 ♥ 혜인</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="현준 ♥ 혜인" />
        <meta property="og:description" content="Join us for our special day!" />
        <meta property="og:image" content="https://hyeonjun-hyein.netlify.app/static/front-b015f51a29e3a91bd6752f2fd41cf84d.jpg" />
        <meta property="og:url" content="https://hyeonjun-hyein.netlify.app/" />
        <meta property="og:image:alt" content="https://hyeonjun-hyein.netlify.app/static/front-b015f51a29e3a91bd6752f2fd41cf84d.jpg" />
      </Helmet>

      <DarkGradientWrapper>
        <Title />
        <Greeting />
        <div id="gallery">
          <PhotoGallery />
        </div>
        <Quote />
      </DarkGradientWrapper>

      <PinkWrapper>
        <div id="location">
          <Location />
        </div>
        <CongratulatoryMoney />
        <Share />
      </PinkWrapper>
    </Wrapper>
  );
};

export default IndexPage;
