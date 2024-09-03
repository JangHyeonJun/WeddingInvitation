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
  };

  const onOpen = (galleryInstance) => {
    // Hide the close button when the gallery opens
    const closeButton = document.querySelector('.pswp__button--close');
    if (closeButton) {
      closeButton.style.display = 'block'; // Hide the close button
    }
  };

  return (
    <Gallery options={galleryOptions} onOpen={onOpen}>
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
                  loading="lazy"
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
