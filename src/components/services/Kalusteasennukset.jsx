import data from './kalusteData';
import img from '../../assets/frame4.png';
import { useNavigate } from 'react-router-dom';

const Kalusteasennukset = () => {
  const navigate = useNavigate();

  return (
    <div id="kaluste-asennukset">
      <div className="flex flex-col w-full sm:px-4 lg:px-0">
        <div className="w-full max-w-[900px] mx-auto px-4 md:px-0">
          <h1 className="text-black text-[28px] text-left font-bold my-4">
            {data.h1}
          </h1>
          <p className="my-4">{data.sections[0].p1}</p>
          <p className="my-4">{data.sections[0].p2}</p>
        </div>

        <div className="w-full max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between items-center my-10">
          <div className="flex flex-col items-center justify-center text-center w-full max-w-[500px] px-4 py-2">
            <h2 className="font-semibold w-full max-w-[350px] my-2">
              {data.sections[0].p3}
            </h2>
            <button
              onClick={() => navigate('/contact')}
              className="w-[220px] h-[50px] bg-gradient-to-r from-[#D89F73] to-[#905E35] border-2 border-[#374151] shadow-md rounded-[10px] flex items-center justify-center transition-transform transform hover:scale-105 cursor-pointer my-4"
            >
              <span className="text-black text-[18px] font-semibold">
                Ota yhteyttä
              </span>
            </button>
          </div>
          <div className="w-full max-w-[600px] px-4">
            <img
              src={img}
              alt="Kalusteasennukset"
              className="w-full transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[900px] mx-auto px-4 md:px-0">
        <p className="my-4">{data.sections[0].p4}</p>
      </div>
    </div>
  );
};

export default Kalusteasennukset;
