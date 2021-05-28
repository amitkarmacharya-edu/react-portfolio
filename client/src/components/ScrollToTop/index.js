import React, { useEffect, useState } from 'react';
import { animateScroll as Scroll } from 'react-scroll';
import './index.css';

const ScrolLToTop = ({scrollBelow}) => {

  const [showScroll, setShowScroll] = useState(scrollBelow ? false: true);
  
  const handleScroll = () => {
    if ( window.pageYOffset > scrollBelow ) {
      if(!showScroll) setShowScroll(true);
    } else {
      if(showScroll) setShowScroll(false);
    }
  }

  const handleClick = (e) => {
    Scroll.scrollToTop();
  }

  useEffect(() => {
    if(scrollBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <> 
      {showScroll === true && (

      <div className="scroll-to-top" onClick={handleClick}>
        <div className="scroll-top-icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
          </svg>
        </div>
      </div>
      )}
    </>
  )
}

export default ScrolLToTop
