import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { WeddingCoupleIcon, MapIcon } from "./icon"; // Ensure path is correct
import BackgroundImage from "../images/front.jpg"; // Ensure path is correct
import WeddingPlaneImage from "../images/wedding_plane.svg"

const FrontSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Curtain = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;

  &::before {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: 
      linear-gradient(
        to bottom,
        rgba(82, 94, 102, 0) 60%,
        rgba(41, 47, 51, 1) 100%),
      url(${BackgroundImage});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 0.8;
    content: "";
  }
`;

const CenterWrap = styled.div`
  position: relative;
  text-align: center;
  color: #ffffff;
  z-index: 1;
`;

const LinkButton = styled.a`
  display: block;
  font-weight: bold;
  line-height: 1.4rem;
  width: 3rem;
  height: 1.4rem;
  position: absolute;
  bottom: 150.5vh;
  color: #ffffff;
  text-align: center;
  z-index: 1;
  white-space: nowrap; /* Prevents line breaks */

  & img {
    display: block;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    height: 1.5rem;
  }
`;

const Title = () => {

  const handleScrollToGallery = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const galleryElement = document.getElementById("gallery");
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  const handleScrollToLocation = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const locationElement = document.getElementById("location");
    if (locationElement) {
      locationElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FrontSection id="front">
      <Helmet>
        <link rel="preload" href={BackgroundImage} as="image" />
      </Helmet>
      <Curtain />
      <CenterWrap>
        <h1>2024.12.01</h1>
        <img
          src={WeddingPlaneImage}
          width={150}
          height={200}
        />
        <h2>ㅤ</h2>
        <h2>ㅤ</h2>
        
      </CenterWrap>
      <LinkButton
        className="go-to go-to-wedding"
        onClick={handleScrollToGallery}
        data-margin-top="120"
      >
        <WeddingCoupleIcon width={40} height={20} />
        웨딩 사진
      </LinkButton>
      <LinkButton className="go-to go-to-welcome"
        onClick={handleScrollToLocation}
        data-margin-top="120">
        <MapIcon width={25} height={20} />
        오시는 길
      </LinkButton>
    </FrontSection>
  );
};

export default Title;
