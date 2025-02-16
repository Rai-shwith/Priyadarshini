"use client";
import Image from "next/image";
import React from "react";

const FacilityItems = ({ img, title, description }) => {
  return (
    // <div className="w-full">
      <div className="flex flex-col bg-white p-5 rounded-lg shadow-lg w-11/12 mx-auto md:mx-0 m-5 md:w-1/4">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            sizes="(max-width: 768px) 50vw,
           (max-width: 1200px) 33vw,
           25vw"
            fill
            src={"/images/Facilities/" + img}
            alt={title}
            className="w-full rounded"
          />
        </div>
        <h3 className="text-2xl text-left font-bold mt-4">{title}</h3>
        <p className="text-left opacity-50 mt-2 mb-5">{description}</p>
      </div>
    // </div>
  );
};

export default FacilityItems;
