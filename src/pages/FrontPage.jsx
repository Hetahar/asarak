import HeroImg from '../components/MainHero';
import Navbar from '../components/Navbar';
import TypesCard from '../components/type/TypesCard';
import squareData from '../components/type/types-data';
import Footer from '../components/Footer';
import Comparison from '../components/Comparison';
import PromiseSection from '../components/promise/PromiseSection';
import FirstInfo from '../components/FirstInfo';
import { useEffect } from 'react';

function FrontPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <HeroImg />
      <div className="flex flex-col sm:flex-row justify-center mt-10" id="first-info">
        <FirstInfo />
        <Comparison />
      </div>
      <PromiseSection />
      {/* Section for Types Cards */}
      <div className="max-w-[900px] mx-auto flex flex-wrap justify-center gap-6 px-4 py-8">
        {squareData.map((item, index) => (
          <div key={index} className="w-full sm:w-[420px]">
            <TypesCard
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default FrontPage;
