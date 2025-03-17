import data from './kylpyhuoneVaiheetData';

const KylpyhuoneVaiheet = () => {
  return (
    <div className="bg-[#F9F5F1] w-full flex flex-wrap justify-center py-10 my-10">
      <h1 className="text-black font-semibold text-[24px] max-w-[1000px] text-center mb-10 mx-6">{data[6].p}</h1>
      <div className="max-w-[1080px] px-4 flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-6">
        {data.slice(0, 6).map((item, index) => (
          <section
          key={index}
          className="mx-auto md:mx-8 lg:mx-auto custom-mx-8 py-10 px-4 md:px-0 bg-[#374151] w-[300px] sm:w-[320px] h-[210px] flex flex-col items-center justify-center text-center rounded-3xl border-l-8 border-[#9F9F9F] transform transition-transform duration-300 hover:scale-105 shadow-lg"
        >
        
            <div className="mx-auto p-4">
              <h1 className="text-white text-[18px] text-left font-bold my-2 italic">
                {item.h1}
              </h1>
              <p className="text-white my-2 text-[18px] text-left font-light">{item.p}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default KylpyhuoneVaiheet;
