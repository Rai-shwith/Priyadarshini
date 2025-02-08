import React from "react";
import FacilityItems from "./FacilityItems";

const Facilities = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="my-5">Empowering Learning with the Best</div>
      <div className="text-4xl font-bold my-5 text-center">P.E.M.H.P.S FACILITIES</div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        <FacilityItems
          img={"computerLab.png"}
          title={"Innovative Computer Lab"}
          description={
            "Equipped with the latest technology, our computer lab provides students with hands-on experience in coding, research, and digital learning."
          }
        />

        <FacilityItems
          img={"chemistryLab.png"}
          title={"Exploratory Chemistry Lab"}
          description={
            "Our well-equipped chemistry lab allows students to conduct experiments and explore the fascinating world of science with safety and precision."
          }
        />

        <FacilityItems
          img={"playground.png"}
          title={"Active Playground"}
          description={
            "A vast and safe space where students engage in physical activities, develop teamwork, and enjoy outdoor sports."
          }
        />

        <FacilityItems
          img={"sportsCoaching.png"}
          title={"Professional Sports Coaching"}
          description={
            "Dedicated coaching programs help students excel in various sports, fostering discipline, teamwork, and a competitive spirit."
          }
        />

        <FacilityItems
          img={"bus.png"}
          title={"Safe and Reliable Transport"}
          description={
            "Our fleet of school buses ensures safe and comfortable transportation for students, covering key routes across the city."
          }
        />

        <FacilityItems
          img={"midDayMeal.png"}
          title={"Nutritious Mid-Day Meals"}
          description={
            "Freshly prepared, balanced meals are provided to ensure students stay energized and focused throughout the day."
          }
        />
      </div>
    </div>
  );
};

export default Facilities;
