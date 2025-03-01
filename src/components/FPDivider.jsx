import img from '../assets/frame8.png';
import { useNavigate } from 'react-router-dom';

const FPDivider = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F9F5F1] w-full flex flex-wrap justify-center gap-6 py-15 my-12">
      <div className="w-full max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center my-10">
        <div className="w-full max-w-[700px] px-4">
          <img
            src={img}
            alt="Huoneistoremontit"
            className="w-full transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center w-full max-w-[300px] p8 py-2">
          <h1 className="font-semibold text-[32px] w-full max-w-[350px] my-2">
            Luotettava kumppani tulevaan projektiisi?
          </h1>
          <p className="my-4">Tutustu Asarak Oy kohteisiin.</p>
          <button
            onClick={() => navigate('/projects')}
            className="w-[220px] h-[50px] bg-gradient-to-r from-[#D89F73] to-[#905E35] border-2 border-[#374151] shadow-md rounded-[10px] flex items-center justify-center transition-transform transform hover:scale-105 cursor-pointer my-4"
          >
            <span className="text-black text-[18px] font-semibold">
              Projektit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FPDivider;
