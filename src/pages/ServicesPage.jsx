import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import ServicesHero from '../components/ServicesHero';
import Footer from '../components/Footer';
import Huoneistoremontit from '../components/services/Huoneistoremontit';
import RakennusJaRemontointi from '../components/services/RakJaRem';
import Kylpyhuone from '../components/services/Kylpyhuone';
import Kalusteasennukset from '../components/services/Kalusteasennukset';
import Maalaustyöt from '../components/services/Maalaustyöt';
import Mikrosementoinnit from '../components/services/Mikrosementoinnit';
import SidebarNavigation from '../components/SidebarNavigation';
import useScrollDirection from '../components/hooks/useScrollDirection';

function ServicesPage() {
  const scrollDirection = useScrollDirection();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (scrollDirection === 'up') {
      setIsSticky(true);
    } else if (scrollDirection === 'down') {
      setIsSticky(false);
    }
  }, [scrollDirection]);

  useEffect(() => {
    //scroll to top if no hash in URL
    if (!location.hash) {
      window.scrollTo(0, 0);
    }

    //if there is a hash, scroll smoothly to the section
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          const yOffset = -70;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <nav className={`z-50 bg-white shadow ${isSticky ? 'sticky top-0' : ''}`}>
        <Navbar />
      </nav>
      <ServicesHero />
      {/* Sidebar only visible on large (md+) screens */}
      <div className="hidden lg:block">
        <SidebarNavigation />
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-y-12 md:gap-y-10 my-6 md:my-10">
        <Huoneistoremontit id="huoneistoremontit" />
        <RakennusJaRemontointi id="rakennus-ja-remontointi" />
        <Kylpyhuone id="kylpyhuone" />
        <Kalusteasennukset id="kaluste-asennukset" />
        <Maalaustyöt id="maalaustyot" />
        <Mikrosementoinnit id="mikrosementoinnit" />
      </div>

      <Footer />
    </div>
  );
}

export default ServicesPage;
