function BeforeAfter({ before, after, className }) {
  return (
    <div
      id="before-after"
      className={`flex flex-col md:flex-row justify-center items-center max-w-[900px] md:mx-auto ${className}`}
    >
      <img
        src={before}
        alt="Before"
        className="w-full md:w-1/2 object-contain"
      />
      <img src={after} alt="After" className="w-full md:w-1/2 object-contain" />
    </div>
  );
}

export default BeforeAfter;
