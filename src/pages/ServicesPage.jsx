import React from "react";
import { useEffect } from "react";
import Navbar from "../components/NavBar";
import ServicesHero from "../components/ServicesHero";
import Footer from "../components/Footer";
import Huoneistoremontit from "../components/services/Huoneistoremontit";
import RakennusJaRemontointi from "../components/services/RakJaRem";
import Kylpyhuone from "../components/services/Kylpyhuone";
import Kalusteasennukset from "../components/services/Kalusteasennukset";
import Maalaustyöt from "../components/services/Maalaustyöt";
import Mikrosementoinnit from "../components/services/Mikrosementoinnit";
import SidebarNavigation from "../components/SidebarNavigation";

function ServicesPage() {
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
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); //delay to ensure DOM is fully loaded
      }
    }
  }, [location]);

  return (
    <div>
      <nav className="sticky top-0 z-50 bg-white shadow">
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
