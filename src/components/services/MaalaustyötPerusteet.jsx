import data from './maalaustyötPerusteetData';

const MaalaustyötPerusteet = () => {
  return (
    <div className="bg-[#F9F5F1] w-full flex flex-wrap justify-center mt-10">
      <h1 className="text-black font-semibold text-[24px] text-center py-10">{data.p}</h1>
      <div className="max-w-[900px] mx-auto flex flex-wrap justify-center gap-4 px-4 mb-10">
        {Object.values(data).slice(1, 5).map((text, index) => (
          <section
            key={index}
            className="mx-auto py-10 px-4 md:px-0 bg-[#374151] md:w-[420px] md:h-[210px] flex flex-col items-center justify-center text-center rounded-3xl border-l-8 border-[#9F9F9F] transform transition-transform duration-300 hover:scale-105 shadow-lg cursor-pointer"
          >
            <div className="mx-auto p-4">
              <p className="text-white my-2 text-[18px] text-left font-light">{text}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MaalaustyötPerusteet;
