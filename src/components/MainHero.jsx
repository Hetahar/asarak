import { useNavigate } from 'react-router-dom';
import img from '../assets/hero-image.png';

const MainHero = () => {
  return (
    <section className="" id="main-hero">
      <div className="relative w-full h-auto">
        <img
          loading="lazy"
          src={img}
          className="w-full h-auto"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute top-7/10 left-10 md:left-50 lg:left-60 xl:left-85 transform -translate-y-1/2 flex flex-col">
          <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl">
            ASARAK OY
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl">
            Rakennustyöt ja remontit <br />
            Pohjois-Savon alueella
          </h1>
        </div>
      </div>
    </section>
  );
};
export default MainHero;
