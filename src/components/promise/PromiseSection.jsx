import promiseTexts from "./promise-data";

const PromiseSection = () => {
  return (
    <div className="w-full bg-[#3A3A3A] py-8 flex flex-col items-center mt-20">
      <h2 className="text-white text-[24px] md:text-[32px] font-semibold text-center mx-auto mb-6">
        {promiseTexts.title}
      </h2>
      <div className="w-full max-w-[1129px] flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center gap-6 px-4">
        {promiseTexts.promises.map((promise, index) => (
          <div key={index} className="w-full md:w-1/4 text-white text-[16px] md:text-[18px] font-semibold leading-[30px] md:leading-[35px] text-center">
            <strong>{promise.bold}:</strong> {promise.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromiseSection;
