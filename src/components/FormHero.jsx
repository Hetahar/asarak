const FormHero = ({ handleSubmit }) => {
  const VITE_FORM = import.meta.env.VITE_FORM;
  return (
    <div className="relative bg-[#303841] h-full flex flex-col items-center justify-center z-0">
      {/* Background Text */}
      <h1
        className="hidden md:block absolute text-[200px] font-sans font-normal text-white opacity-20 
                        tracking-widest left-[-4.58%] top-[-0.7%] w-[70%] leading-[200px] pointer-events-none z-10"
      >
        ota yhteyttä
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between my-10 w-full max-w-[900px] sm:px-4 lg:px-0 z-20">
        <div className="w-full md:w-[17rem] text-center md:text-left">
          <h1
            className="text-white text-[28px] my-10 md:text-[36px] font-bold mt-10 leading-[40px] md:leading-[55px] 
                 mx-auto break-words"
          >
            Remontin tarpeessa? Ota yhteyttä Asarak Oy!
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          action={`${VITE_FORM}`}
          method="POST"
          className="w-[300px] md:w-[430px] flex flex-col"
        >
          <div className="flex flex-col md:flex-row space-x-4">
            <div>
              <input
                type="text"
                id="firstName"
                name="first-name"
                placeholder="Etunimi *"
                required
                className="border-b-2 border-white focus:outline-none focus:border-gray-300 placeholder-white p-1 my-4 text-white w-[300px] md:w-[205px]"
              />
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                name="last-name"
                placeholder="Sukunimi *"
                required
                className="border-b-2 border-white focus:outline-none focus:border-gray-300 placeholder-white p-1 my-4 text-white w-[300px] md:w-[205px]"
              />
            </div>
          </div>
          <div className="flex space-x-4 flex-col md:flex-row">
            <div>
              <input
                type="tel"
                id="phoneNumber"
                name="phone-number"
                placeholder="Puhelinnumero *"
                required
                className="border-b-2 border-white focus:outline-none focus:border-gray-300 placeholder-white p-1 my-4 text-white w-[300px] md:w-[205px]"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Sähköposti *"
                required
                className="border-b-2 border-white focus:outline-none focus:border-gray-300 placeholder-white p-1 my-4 text-white w-[300px] md:w-[205px]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-x-4">
            <div>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Yritys"
                className="border-b-2 border-white focus:outline-none focus:border-gray-300 placeholder-white p-1 my-4 text-white w-[300px] md:w-[205px]"
              />
            </div>
            <div>
              <select
                id="projectType"
                name="project-type"
                required
                className="border-b-2 border-white focus:outline-none focus:border-gray-300 text-white bg-transparent w-[300px] md:w-[205px] p-1 my-4"
              >
                <option value="">Projektin tyyppi</option>
                <option value="huoneistoremontit" className="text-black">
                  Huoneistoremontit
                </option>
                <option value="rakennus-ja-remontointi" className="text-black">
                  Rakennus- ja remontointipalvelut
                </option>
                <option value="kylpyhuone-ja-laatoitus" className="text-black">
                  Kylpyhuoneremontit ja laatoitustyöt
                </option>
                <option value="kalusteasennukset" className="text-black">
                  Kalusteasennukset
                </option>
                <option value="maalaustyöt" className="text-black">
                  Maalaustyöt
                </option>
                <option value="mikrosementoinnit" className="text-black">
                  Mikrosementoinnit
                </option>
                <option value="muut-palvelut" className="text-black">
                  Muut palvelut
                </option>
              </select>
            </div>
          </div>
          <div>
            <textarea
              id="moreInfo"
              name="more-info"
              placeholder="Lisätietoja"
              className="border-b-2 border-white focus:outline-none focus:border-gray-300 placeholder-white h-[35px] w-[300px] md:w-[425px] p-1 my-4 mr-4 md:mr-0 text-white 
             whitespace-nowrap overflow-x-auto overflow-y-hidden resize-none no-scrollbar"
            />
          </div>
          <button
            type="submit"
            className="w-[238px] h-[55px] bg-gradient-to-r from-[#D89F73] to-[#905E35] border-2 border-black shadow-md rounded-[10px] transition-transform transform hover:scale-105 cursor-pointer text-black font-bold text-[18px] leading-[25px] mt-8 mx-auto md:mx-0"
          >
            Lähetä
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormHero;
