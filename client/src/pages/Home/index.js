import React from 'react';
import HoneyCombHero from '../../components/HoneyCombHero';
import AboutMe from '../../components/AboutMe';
import Contacts from '../../components/Contacts';

function Home() {
  return (
    <main className="container">
      <HoneyCombHero />
      <AboutMe />
      <Contacts />
    </main>
  )
}

export default Home;
