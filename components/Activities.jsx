"use client"
import React from "react";
import ActivityItems from "./ActivityItems";

const Activities = ({text}) => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="my-5">{text.quote}</div>
      <div className="text-4xl font-bold my-5 text-center">{text.heading}</div>
      <div className="flex flex-col md:flex-row items-stretch mx-auto gap-5 md:w-11/12">
        <ActivityItems
          img={"karate.png"}
          title={text.card["1"].head}
          description={
            text.card["1"].body
          }
        />

        <ActivityItems
          img={"yakshagana.png"}
          title={text.card["2"].head}
          description={
            text.card["2"].body
          }
        />

        <ActivityItems
          img={"sangeta.png"}
          title={text.card["3"].head}
          description={
            text.card["3"].body
          }
        />

        <ActivityItems
          img={"natya.png"}
          title={text.card["4"].head}
          description={
            text.card["4"].body
          }
        />
      </div>
    </div>
  );
};

export default Activities;
