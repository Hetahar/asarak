import HeroImg from '../components/MainHero';
import Navbar from '../components/NavBar';
import TypesCard from '../components/type/TypesCard';
import squareData from '../components/type/types-data';
import Footer from '../components/Footer';
import Comparison from '../components/Comparison';
import PromiseSection from '../components/promise/PromiseSection';
import FirstInfo from '../components/info/FirstInfo';
import { useEffect, useState } from 'react';
import FPDivider from '../components/FPDivider';
import useScrollDirection from '../components/hooks/useScrollDirection';

import img1 from '../assets/IMG_03.png';
import img2 from '../assets/img-slider2.png';

function FrontPage() {
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className={`z-50 bg-white shadow ${isSticky ? 'sticky top-0' : ''}`}>
        <Navbar />
      </nav>
      <HeroImg />
      <div
        className="flex flex-col md:flex-row md:items-center md:justify-between mt-10 md:mt-20 max-w-[900px] mx-auto"
        id="first-info"
      >
        <div className="flex-1">
          <FirstInfo />
        </div>
        <div className="flex-1 flex justify-center items-center px-4 md:px-0">
          <Comparison image1={img1} image2={img2} />
        </div>
      </div>

      {/* Section for Types Cards */}
      <div className="max-w-[900px] mx-auto flex flex-wrap justify-center gap-6 sm:px-4 my-20">
        {squareData.map((item, index) => (
          <div
            key={index}
            className="w-[90%] max-w-[420px] min-w-[280px] sm:w-[420px] mx-auto"
          >
            <TypesCard
              image={item.image}
              title={item.title}
              description={item.description}
              targetId={item.id}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
      <FPDivider />
      <PromiseSection />

      <Footer />
    </>
  );
}

export default FrontPage;
