import React from 'react';
import Navbar from '../components/Navbar';
import MainHero from '../components/MainHero';
import Footer from '../components/Footer';
import Huoneistoremontit from '../components/services/Huoneistoremontit';
import RakennusJaRemontointi from '../components/services/RakJaRem';

function ServicesPage() {
  return (
    <div>
      <Navbar />
      <MainHero />
      <div className="flex flex-col items-center justify-center w-full">
        <Huoneistoremontit />
        <RakennusJaRemontointi />
      </div>
      <Footer />
    </div>
  );
}

export default ServicesPage;
