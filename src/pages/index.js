import React, { useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";
import "../styles/global.css";
import "../styles/pretendard.css";
import "../styles/style.css";

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Song from "../assets/song.mp3";

import AOS from "aos";
import "aos/dist/aos.css";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  width: 100%;
`;

const DarkGradientWrapper = styled.div`
  background: linear-gradient(
    rgba(41, 47, 51, 1) 100%,
    rgba(41, 47, 51, 1) 50%,
    rgba(41, 47, 51, 1) 0%
  );
  width: 100%;
`

const PinkWrapper = styled.div`
  background: var(--pink-background); 
  color: var(--pink-color);
  width: 100%;
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
      <audio autoPlay loop>
        <source src={Song} />
      </audio>
      <DarkGradientWrapper>
        <Title />
        <Greeting />

        <div id="gallery">
          <Gallery />
        </div>
        <Quote />
      </DarkGradientWrapper>
      <PinkWrapper>

        <div id="location">
          <Location />
        </div>
        <CongratulatoryMoney />
        <Share />
        <Footer
          style={{
            background: "#D7CCC8",
            backgroundImage: `url(${GroovePaper})`,
            opacity: 0.6,
            textAlign: "center",
          }}
          >
          Copyright © 2022 Shin Jooyoung
        </Footer>
      </PinkWrapper>
    </Wrapper>
  );
};

export default IndexPage;
