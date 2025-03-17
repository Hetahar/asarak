import data from "./maalaustyötData.js";
import MaalaustyötPerusteet from "./MaalaustyötPerusteet.jsx";

const Maalaustyöt = () => {
  return (
    <div id="maalaustyot" className="flex w-full flex-col">
      <div className="flex flex-col w-full sm:px-4 lg:px-0">
        <div className="w-full max-w-[900px] mx-auto px-4 md:px-0">
          <h1 className="text-black text-[28px] text-left font-bold my-4">
            {data.h1}
          </h1>
          <p className="my-4 font-semibold">{data.sections[0].h2}</p>
          <p className="my-4">{data.sections[0].p}</p>
          <p className="my-4 font-semibold">{data.sections[1].p1}</p>
          <p className="my-4">{data.sections[1].p2}</p>
        </div>
      </div>
      <MaalaustyötPerusteet />
    </div>
  );
};

export default Maalaustyöt;
