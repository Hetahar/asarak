import HeroImg from '../components/MainHero';
import Navbar from '../components/Navbar';
import TypesCard from '../components/TypesCard';
import squareData from '../components/types-data';
import Footer from '../components/Footer';
import Comparison from '../components/Comparison';

function FrontPage() {
  return (
    <>
      <Navbar />
      <HeroImg />
      <Comparison />
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
