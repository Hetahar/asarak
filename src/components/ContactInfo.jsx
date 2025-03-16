import img from '../assets/mikrosementointi-03.jpg';
import { useEffect } from 'react';

const ContactInfo = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <div className="flex justify-between max-w-[900px] mx-auto my-8 md:my-30">
        <div className="flex flex-col md:flex-row w-full max-w-[900px] mx-auto px-4 lg:px-0">
          <div className="my-10 md:my-20 text-right pr-12 ml-32">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold">ASARAK OY</h2>

              <p className="mt-4">Aatu Vajanto, Rakennusinsinööri</p>
              <a href="tel:+358451120383" className="">
              📞 045 112 0383
              </a>
              <a href="mailto:aatu@asarak.fi" className="">
                ✉ aatu@asarak.fi
              </a>
            </div>

            <div className="my-4">
              <p className="">Asarak Oy</p>
              <p className="">Y-tunnus: 3430841-7</p>
            </div>

            <div className="my-4">
              <p className="">Kehäkatu 23</p>
              <p className="">70600 Kuopio</p>
            </div>
          </div>

          <div className="w-full max-w-[350px] px-4 transform transition-transform duration-300 hover:scale-105">
            <img src={img} alt="Contact info" className="rounded-3xl"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;