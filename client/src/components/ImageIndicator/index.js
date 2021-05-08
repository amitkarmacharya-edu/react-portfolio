import React from "react";
import PropTypes from "prop-types";

function ImageIndicator({ index, num }) {
  const indicators = (index, num) => {
    if(num <= 1) {
      return null;
    }
    let tmpArr = [];
    for (let i = 0; i < num; i++) {
      tmpArr.push(
        <div
          data-testid="indicator"
          key={i}
          id={(i + 1)}
          className={index === i + 1 ? "active" : ""}
        ></div>
      );
    }
    return tmpArr
  };

  return (
    <>  
    {
      indicators(index, num)
    }
    </>
  )
}

ImageIndicator.propTypes = {
  index: PropTypes.number,
  imgArrLen: PropTypes.number,
};

export default ImageIndicator;
