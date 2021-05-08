import React, { useEffect, useState } from 'react';
import { Switch, Link, Route, Redirect } from 'react-router-dom';

import LinkIcon from '../../components/LinkIcon';
import PortfolioDetailView from '../../components/PortfolioDetailView';

function Portfolio() {

  return (
    <>
      <main> 
        <section>
          <div>
            <h3 data-testid="page-title">Portfolio</h3>
            <div data-testid="portfolio-container">
              <Link to="/portfolio/grid">
                <LinkIcon alt="grid layout icon" src="/assets/images/grid-icon.png" />
              </Link>
              <Link to="/portfolio/detail">
                <LinkIcon alt="detail layout icon" src="/assets/images/detail-icon.png" />
              </Link>
            </div>
          </div>
          <div data-testid="portfolio-content">
            <Switch>
              <Redirect exact from="/portfolio" to="/portfolio/grid" />
              <Route path="/portfolio/detail" component={PortfolioDetailView} />
            </Switch>
          </div>
        </section>
      </main>
    </>
  );
}

export default Portfolio;
