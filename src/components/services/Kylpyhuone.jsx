import KylpyhuoneVaiheet from './KylpyhuoneVaiheet';
import data from './kylpyhuoneData';
import img from '../../assets/kylpyhuone.png';

const Kylpyhuone = () => {
  return (
    <div id="kylpyhuone" className="flex w-full flex-col">
      <div className="flex flex-col w-full sm:px-4 lg:px-0">
        <div className="w-full max-w-[900px] mx-auto px-4 md:px-0">
          <h1 className="text-black text-[28px] text-left font-bold">
            {data.h1}
          </h1>
          <p className="my-4 font-semibold">{data.sections[0].h2}</p>
          <p className="my-4">{data.sections[0].p}</p>
        </div>
      </div>

      <KylpyhuoneVaiheet />
      <div className="w-full max-w-[900px] mx-auto px-4 md:px-0">
        <p className="my-4">{data.sections[1].p1}</p>
        <p className="my-4">{data.sections[1].p2}</p>
        <p className="my-4">{data.sections[1].p3}</p>
      </div>

      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center my-10">
        <div className="w-full max-w-[600px] px-4">
          <img src={img} alt="Huoneistoremontit" className="w-full transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="flex flex-col items-center justify-center text-center w-full max-w-[500px] px-4 py-2">
          <h2 className="font-semibold w-full max-w-[290px] my-2">
            {data.sections[2].h2}
          </h2>
          <p className="w-full max-w-[400px] my-2">{data.sections[2].p}</p>
        </div>
      </div>
    </div>
  );
};

export default Kylpyhuone;
