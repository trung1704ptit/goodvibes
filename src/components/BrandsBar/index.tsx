/* eslint-disable @next/next/no-img-element */
import React from "react";

const clients = [
  "DBS_logo.png",
  "client-1.png",
  "client-2.png",
  "client-4.png",
  "client-8.png",
  "client-6.png",
  "IBM_logo.png",
  "Shopee.png",
];

const BrandsBar = () => {
  return (
    <div className="overflow-hidden py-4">
      <div className="flex animate-marqueeFast md:animate-marquee space-x-12 md:space-x-28">
        {clients.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand ${index + 1}`}
            className="h-9 w-auto"
          />
        ))}
        {clients.map((logo, index) => (
          <img
            key={index + 4}
            src={logo}
            alt={`Brand ${index + 5}`}
            className="h-9 w-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsBar;
