import React from 'react'
import { useState } from 'react';
import styled from '@emotion/styled';
import PhotoGallery from './PhotoGallery.jsx';

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };

  return (
    <ContentsWrap>
      <ImageMoreWrap isMoreView={isMoreView}>
        {!isMoreView && <WhiteGradientOverlay />}
        <PhotoGallery />
      </ImageMoreWrap>
      {isMoreView && (
        <PlusButton onClick={onClickImageMoreViewButton}>접기</PlusButton>
      )}
      {!isMoreView && (
        <PlusButton onClick={onClickImageMoreViewButton}>펼치기</PlusButton>
      )}
    </ContentsWrap>
  );
};

export default GalleryWrap;

const ContentsWrap = styled.div`
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageMoreWrap = styled.div`
  position: relative;
  max-height: ${(props) =>
    props.isMoreView
      ? ''
      : '10rem'}; /* isMoreView 상태가 true일 때는 높이 제한 없이, false일 때는 195px로 작게 보이도록 */
  overflow: hidden;
`;

const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const PlusButton = styled.div`
  width: 30%;
  box-sizing: border-box;
  padding: 6px 12px;
  font-size: 0.4rem;
  font-weight: 700;
  text-align: center;
  align-items: center;
  border: 0.5px solid #dfdfdf;
  cursor: pointer;
  margin-top: 0.4rem;
`;
