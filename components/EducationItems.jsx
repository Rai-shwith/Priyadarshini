"use client";
import React from "react";
import Image from "next/image";

const EducationItems = ({ img, title, description }) => {
  return (
    <div className="flex flex-col bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-1/4 m-5">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={"/images/Education/" + img}
          fill
          sizes="(max-width: 768px) 50vw,
           (max-width: 1200px) 33vw,
           25vw"
          alt={title}
          className="w-full bg-red-800 rounded"
        />
      </div>
      <h3 className="text-2xl text-left font-bold mt-4">{title}</h3>
      <p className="text-left opacity-50 mt-2 mb-5">{description}</p>
    </div>
  );
};

export default EducationItems;
