import React from 'react';
import PropTypes from 'prop-types';
import PortfolioDetailCard from '../PortfolioDetailCard';

function PortfolioDetailView({projects}) {
  return(
    <>
      {
        projects && projects.map((project, index) => {
          return <PortfolioDetailCard key={index} project={project} />
        })
      }
    </>
  );
}

export default PortfolioDetailView;

PortfolioDetailView.propType = {
  projects: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        thumbnail: PropTypes.arrayOf(PropTypes.string),
        liveSite: PropTypes.string,
        github: PropTypes.string,
        docs: PropTypes.string,
      }),
  ),
};
