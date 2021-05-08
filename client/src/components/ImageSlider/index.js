import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageIndicator from "../ImageIndicator";

function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  const prevImage = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) setIndex(images.length - 1);
    else setIndex(nextIndex);
  };

  return (
    <>
      {images.length > 0 && (
        <div>
          <button data-testid="slider-arrow" onClick={prevImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </button>

          <button data-testid="slider-arrow" onClick={nextImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </button>

          <img alt="project screenshot" src={images} />

          <ImageIndicator index={index} num={images.length}/>
        </div>
      )}
    </>
  );
}

export default ImageSlider;

ImageSlider.prototype = {
  images: PropTypes.arrayOf(PropTypes.string),
};
