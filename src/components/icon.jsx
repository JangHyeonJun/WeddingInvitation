import React from "react";
import WeddingCoupleImage from "../images/wedding-couple-icon.svg"; // Adjust the path if necessary
import MapImage from "../images/map-icon.svg"; // Adjust the path if necessary

export const WeddingCoupleIcon = ({ width = 24, height = 24 }) => (
  <img
    src={WeddingCoupleImage}
    alt="Wedding Couple Icon"
    width={width}
    height={height}
  />
);

export const MapIcon = ({ width = 24, height = 24 }) => (
  <img
    src={MapImage}
    alt="Map Icon"
    width={width}
    height={height}
  />
);