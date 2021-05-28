import React from 'react';
import HoneyCombHero from '../../components/HoneyCombHero';
import AboutMe from '../../components/AboutMe';
import Contacts from '../../components/Contacts';
import Portfolio from '../../components/Portfolio';

function Home() {
  return (
    <main className="container">
      <HoneyCombHero />
      <Portfolio />
      <AboutMe />
      <Contacts />
    </main>
  )
}

export default Home;
