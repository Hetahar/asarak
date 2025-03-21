import React from 'react';
import Navbar from '../components/NavBar';
import ProjectHero from '../components/ProjectHero';
import BeforeAfter from '../components/BeforeAfter';
import Footer from '../components/Footer';
import img1 from '../assets/before1.png';
import img2 from '../assets/after1.png';
import img3 from '../assets/before2.png';
import img4 from '../assets/after2.png';
import img5 from '../assets/before3.png';
import img6 from '../assets/after3.png';
import img9 from '../assets/before5.png';
import img10 from '../assets/after5.png';
import img11 from '../assets/before6.png';
import img12 from '../assets/after6.png';
import img13 from '../assets/before7.png';
import img14 from '../assets/after7.png';
import img15 from '../assets/before8.png';
import img16 from '../assets/after8.png';
import img17 from '../assets/before9.png';
import img18 from '../assets/after9.png';
import img19 from '../assets/kaluste1.png';
import img20 from '../assets/kaluste2.png';
import img7 from '../assets/kylppari01.png';
import img8 from '../assets/kylppari02.png';
import { useEffect, useState } from 'react';
import useScrollDirection from '../components/hooks/useScrollDirection';

function ProjectsPage() {
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
    <div>
      <nav className={`z-50 bg-white shadow ${isSticky ? 'sticky top-0' : ''}`}>
        <Navbar />
      </nav>
      <ProjectHero />
      <div className="max-w-[900px] mx-auto px-4 lg:px-0 mb-20 mt-15">
        <div id="images">
          <h2 className="text-[18px] leading-[36px] text-black font-semibold">
            Rakennus- ja remontointipalvelut
          </h2>
          <BeforeAfter before={img1} after={img2} className="m-5" />
          <BeforeAfter before={img3} after={img4} className="m-5" />
          <div className="flex justify-center">
            <div className="flex flex-col max-w-[450px] md:flex-row items-center md:max-w-[900px] md:mx-auto px-4 md:px-0">
              <img
                src={img5}
                alt="Before"
                className="w-full md:w-1/2 md:h-[450px] object-cover md:aspect-[3/4]"
              />
              <img
                src={img6}
                alt="After"
                className="w-full md:w-1/2 md:h-[450px] object-cover"
              />
            </div>
          </div>
          <BeforeAfter
            before={img9}
            after={img10}
            className="m-5"
            alt="Before and after image"
          />
          <BeforeAfter
            before={img11}
            after={img12}
            className="m-5"
            alt="Before and after image"
          />
          <h2
            className="text-[18px] leading-[36px] text-black mt-8 md:mt-24 font-semibold"
            alt="Before and after image"
          >
            Kylpyhuoneremontit ja laatoitustyöt
          </h2>
          <BeforeAfter
            before={img13}
            after={img14}
            className="m-5"
            alt="Before and after image"
          />
          <BeforeAfter
            before={img15}
            after={img16}
            className="m-5"
            alt="Before and after image"
          />
          <BeforeAfter
            before={img17}
            after={img18}
            className="m-5"
            alt="Before and after image"
          />
          <BeforeAfter
            before={img7}
            after={img8}
            className="m-5"
            alt="Before and after image"
          />
          <h2
            className="text-[18px] leading-[36px] text-black mt-8 md:mt-24 font-semibold"
            alt="Before and after image"
          >
            Kalusteasennukset
          </h2>
          <BeforeAfter
            before={img19}
            after={img20}
            className="m-5"
            alt="Before and after image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
