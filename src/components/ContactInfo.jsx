import { useEffect } from "react";

import img1 from "../assets/mikrosementointi-01.jpg";
import img2 from "../assets/mikrosementointi-02.jpg";
import Comparison from "./Comparison";

const ContactInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex justify-center max-w-[1000px] mx-auto my-8 md:my-20">
        <div className="flex flex-col-reverse sm:flex-row justify-between w-full gap-6 px-4">
          <div className="flex-1 flex justify-center items-center px-4 md:px-0 pb-4 md:pb-0">
            <Comparison
              image1={img2}
              image2={img1}
              height="500px"
              borderRadius="30px"
            />
          </div>
          <div className="my-10 md:my-20 content-center md:pr-22">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-center">ASARAK OY</h2>
              <p className="mt-8 text-center">
                Aatu Vajanto, <br />
                Rakennusinsinööri
              </p>
              <a href="tel:+358451120383" className="text-center">
                📞 045 112 0383
              </a>
              <a href="mailto:aatu@asarak.fi" className="text-center">
                ✉ aatu@asarak.fi
              </a>
            </div>
            <div className="my-4 text-center">
              <p className="">Asarak Oy</p>
              <p className="">Y-tunnus: 3430841-7</p>
            </div>
            <div className="my-4 text-center">
              <p className="">Kehäkatu 23</p>
              <p className="">70600 Kuopio</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
