import React from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import images from './Images.js';

const PhotoGallery = () => {
  const smallItemStyles = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '3rem',
    height: '3rem',
  };

  const galleryOptions = {
    zoom: false, // Disable zoom feature
    maxZoomLevel: 1, // Prevent further zoom in
    showHideOpacity: true, // Other options you may want to include
  };

  return (
    <Gallery options={galleryOptions}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 0fr)',
          gridGap: 2,
        }}>
        {images.map((image, index) => {
          return (
            <Item
              key={index}
              cropped
              original={image.source}
              thumbnail={image.source}
              width={image.width}
              height={image.height}
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  alt={image.alt}
                  src={image.source}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
