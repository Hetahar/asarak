import React from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const Comparison = ({ image1, image2, height, borderRadius }) => {
  return (
    <div className="w-[100%] h-auto max-h-[600px] max-w-[420px] px-5">
    <ReactCompareSlider style={{ height, borderRadius }}
    itemOne={<ReactCompareSliderImage src={image2} alt="Image one" />}
    itemTwo={<ReactCompareSliderImage src={image1} alt="Image two" />}
    />
    </div>
  );
};

export default Comparison;
