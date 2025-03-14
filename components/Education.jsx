import React from "react";
import EducationItems from "./EducationItems";

const Education = ({text}) => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="my-5">{text.quote}</div>
      <div className="text-4xl font-bold my-5 text-center">{text.heading}</div>
      <div className="flex flex-col md:flex-row items-stretch mx-auto gap-5 md:w-11/12">
        <EducationItems
          img={"prePrimary.png"}
          title={text.card["1"].head}
          description={
            text.card["1"].body
          }
        />
        <EducationItems
          img={"primary.png"}
          title={text.card["2"].head}
          description={
            text.card["2"].body
          }
        />
        <EducationItems
          img={"middleSchool.png"}
          title={text.card["3"].head}
          description={
            text.card["3"].body
          }
        />
        <EducationItems
          img={"highSchool.png"}
          title={text.card["4"].head}
          description={
            text.card["4"].body
          }
        />
      </div>
    </div>
  );
};

export default Education;
