import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImageSlider from '../ImageSlider';

function PortfolioDetailCard({project}) {
  const { name, thumbnail, liveSite, github, docs } = project;
  return(
    <div data-testid="portfolio-detail-card">
      <div>
        <ImageSlider images={thumbnail}/>
      </div>
      <div>
        <h3>{name}</h3>
        <p>description</p>
        <div>
          <h5>Responsibilites</h5>
          <p>List of responsibilities</p>
        </div>
        <div>
          <h5>Technologies</h5>
          <table></table>
        </div>
        <p>Deployed on Heroku</p>
      </div>
      <div>
        <a href={github} target="_blank">Github</a>
        <a href={liveSite} target="_blank">Live Site</a>
        <Link to={docs}>Documentation</Link>
      </div>
    </div>
  );
}

export default PortfolioDetailCard;

PortfolioDetailCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    thumbnail: PropTypes.arrayOf(PropTypes.string),
    liveSite: PropTypes.string,
    github: PropTypes.string,
    docs: PropTypes.string,
  }),
};