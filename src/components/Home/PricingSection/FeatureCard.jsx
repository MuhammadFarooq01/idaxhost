import React from "react";

function FeatureCard({ iconSrc, iconAlt, title, description }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg p-5 gap-5 bg-white w-full mb-5 lg:w-[416px] lg:mb-0">
      <div className="flex items-center gap-5">
        <img src={iconSrc} alt={iconAlt} />
        <h3 className="text-2xl font-extra-bold mb-2 text-cnavy">{title}</h3>
      </div>
      <div className="flex">
        <p className="text-gray-500 font-miulish">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
