import React from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import img1 from "../assets/img-slider1.png";
import img2 from "../assets/img-slider2.png";

const Comparison = () => {
  return (
    <div className="w-[100%] h-auto max-w-[420px] lg:w-[30%] mt-10 px-5">
    <ReactCompareSlider
    itemOne={<ReactCompareSliderImage src={img2} alt="Image one" />}
    itemTwo={<ReactCompareSliderImage src={img1} alt="Image two" />}
    />
    </div>
  );
};

export default Comparison;
