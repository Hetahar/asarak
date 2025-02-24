import img from '../assets/IMG_5715.png';

const ContactInfo = () => {
  return (
    <>
      <div className="flex flex-row justify-between max-w-[900px] mx-auto my-30">
        <div className="flex flex-col">
          <div className="flex flex-col my-4">
            <h2 className="text-3xl font-bold my-10">ASARAK OY</h2>
            <a href="tel:+1112223333" className="">
              🕻 111 222 3333
            </a>
            <a href="mailto:info@asarak.com" className="">
              ✉ info@joku.fi
            </a>
          </div>
          <div className="my-4">
            <p className="">Asarak Oy</p>
            <p className="">Y-tunnus: 1234567-8</p>
          </div>
          <div className="my-4">
            <p className="">Osoiterivi 1</p>
            <p className="">Osoiterivi 2</p>
          </div>
        </div>
        <div>
        <img src={img} alt="Contact info"></img>
      </div>
      </div>
    </>
  );
};

export default ContactInfo;
