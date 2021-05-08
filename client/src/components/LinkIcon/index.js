import React from 'react';
import PropTypes from 'prop-types';

function LinkIcon(props) {
  return (
    <div>
      <img alt={props.alt} src={props.src}/>
    </div>
  );
}

export default LinkIcon;

LinkIcon.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
};