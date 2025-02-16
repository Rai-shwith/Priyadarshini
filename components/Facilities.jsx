"use client"
import React from "react";
import FacilityItems from "./FacilityItems";

const Facilities = ({text}) => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="my-5">{text.quote}</div>
      <div className="text-4xl font-bold my-5 text-center">{text.heading}</div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        <FacilityItems
          img={"computerLab.png"}
          title={text.card["1"].head}
          description={
            text.card["1"].body
          }
        />

        <FacilityItems
          img={"chemistryLab.png"}
          title={text.card["2"].head}
          description={
            text.card["2"].body
          }
        />

        <FacilityItems
          img={"playground.png"}
          title={text.card["3"].head}
          description={
            text.card["3"].body
          }
        />

        <FacilityItems
          img={"sportsCoaching.png"}
          title={text.card["4"].head}
          description={
            text.card["4"].body
          }
        />

        <FacilityItems
          img={"bus.png"}
          title={text.card["5"].head}
          description={
            text.card["5"].body
          }
        />

        <FacilityItems
          img={"midDayMeal.png"}
          title={text.card["6"].head}
          description={
            text.card["6"].body
          }
        />
      </div>
    </div>
  );
};

export default Facilities;
