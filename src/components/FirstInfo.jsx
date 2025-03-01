import { useNavigate } from 'react-router-dom';

const FirstInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="align-center flex flex-col items-center justify-center px-5">
      {/* Myyntilupaus */}
      <div className="w-[250px] font-semibold text-[32px] leading-[48px] text-center text-black mt-4">
        Rakennustyöt ja remontit
      </div>

      {/* Asarak Oy description */}
      <div className="w-[396px] h-[175px] text-[18px] leading-[25px] text-center text-black my-4">
        Asarak Oy on Kuopiolainen rakennusalan asiantuntija, joka tarjoaa
        monipuolisia ja korkealaatuisia rakennuspalveluja. Meillä on laaja
        kokemus ja vankka osaaminen eri rakennusprojekteista, oli kyseessä
        sitten kodin remontointi, uudisrakentaminen tai erikoistuneet
        rakennustyöt.
      </div>

      {/* Contact Button */}
      <button
        onClick={() => navigate('/contact')}
        className="w-[238px] h-[55px] bg-gradient-to-r from-[#D89F73] to-[#905E35] border-2 border-[#374151] shadow-md rounded-[10px] flex items-center justify-center transition-transform transform hover:scale-105 cursor-pointer"
      >
        <span className="text-black font-open-sans font-bold text-[18px] leading-[25px]">
          Ota yhteyttä
        </span>
      </button>
    </div>
  );
};

export default FirstInfo;
