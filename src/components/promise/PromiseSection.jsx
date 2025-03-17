import data from './promise-data';

const PromiseSection = () => {
  return (
    <div className="w-full flex flex-col justify-center my-20">
      <div className="mx-4 md:mx-0">
        <div>
          <h1 className="text-black font-semibold text-[32px] mb-8 text-center">
            {data.title}
          </h1>
        </div>
        <div className="max-w-[900px] mx-auto flex flex-wrap justify-center gap-6 px-4">
          {data.promises.slice(0, 4).map((item, index) => (
            <section
              key={index}
              className="mx-auto py-10 px-4 md:px-0 bg-[#374151] md:w-[420px] md:h-[210px] flex flex-col items-center justify-center text-center rounded-3xl border-l-8 border-[#9F9F9F] transform transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              <div className="mx-auto p-4">
                <h1 className="text-white text-[18px] text-left font-bold my-2">
                  {item.bold}
                </h1>
                <p className="text-white my-2 text-[18px] text-left font-light">
                  {item.text}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromiseSection;
