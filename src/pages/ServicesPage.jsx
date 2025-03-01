import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import MainHero from '../components/MainHero';
import Footer from '../components/Footer';
import Huoneistoremontit from '../components/services/Huoneistoremontit';
import RakennusJaRemontointi from '../components/services/RakJaRem';
import Kylpyhuone from '../components/services/Kylpyhuone';
import Kalusteasennukset from '../components/services/Kalusteasennukset';
import Maalaustyöt from '../components/services/Maalaustyöt';
import Mikrosementoinnit from '../components/services/Mikrosementoinnit';

function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <MainHero />
      <div className="flex flex-col items-center justify-center w-full gap-y-12 md:gap-y-28 my-12 md:my-32">
        <Huoneistoremontit />
        <RakennusJaRemontointi />
        <Kylpyhuone />
        <Kalusteasennukset />
        <Maalaustyöt />
        <Mikrosementoinnit />
      </div>

      <Footer />
    </div>
  );
}

export default ServicesPage;
