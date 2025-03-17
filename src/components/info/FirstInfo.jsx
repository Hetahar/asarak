import { useNavigate } from 'react-router-dom';
import data from './firstInfoData';

const FirstInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center px-5 mb-6">
      {/* Myyntilupaus */}
      <div className="w-full max-w-[350px] font-semibold text-[28px] sm:text-[32px] leading-[40px] sm:leading-[48px] text-center text-black mt-4">
        {data.title}
      </div>

      {/* Asarak Oy description */}
      <div className="w-full max-w-[350px] md:max-w-[396px] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[25px] text-center text-black my-4">
        {data.description}
      </div>

      {/* Contact Button */}
      <button
        onClick={() => navigate('/contact')}
        className="w-[238px] h-[55px] my-4 bg-gradient-to-r from-[#D89F73] to-[#905E35] border-2 border-[#374151] shadow-md rounded-[10px] flex items-center justify-center transition-transform transform hover:scale-105 cursor-pointer"
      >
        <span className="text-black font-open-sans font-bold text-[18px] leading-[25px]">
          Ota yhteyttä
        </span>
      </button>
    </div>
  );
};

export default FirstInfo;
