import React, { useEffect, useRef, useState } from 'react';

const NumberSection = () => {
  const [counts, setCounts] = useState({ students: 0, teachers: 0, result: 0, alumni: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const targets = {
            students: 600,
            teachers: 23,
            result: 100,
            alumni: 4000,
          };
          const duration = 500; // 0.5 seconds
          const increments = {
            students: targets.students / (duration / 10),
            teachers: targets.teachers / (duration / 10),
            result: targets.result / (duration / 10),
            alumni: targets.alumni / (duration / 10),
          };

          const counters = setInterval(() => {
            setCounts((prevCounts) => {
              const newCounts = { ...prevCounts };
              let allDone = true;
              for (const key in targets) {
                if (newCounts[key] < targets[key]) {
                  newCounts[key] += increments[key];
                  allDone = false;
                } else {
                  newCounts[key] = targets[key];
                }
              }
              if (allDone) clearInterval(counters);
              return newCounts;
            });
          }, 10);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className='flex flex-wrap bg-blue-950 h-80 w-screen text-white justify-around items-center'>
      <div className="flex flex-col items-center">
        <h2 className="text-5xl md:text-8xl">{Math.ceil(counts.students)}+</h2>
        <p>Students currently enrolled</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-5xl md:text-8xl">{Math.ceil(counts.teachers)}</h2>
        <p>Teachers & Staffs</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-5xl md:text-8xl">{Math.ceil(counts.result)}%</h2>
        <p>Result percentage</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-5xl md:text-8xl">{Math.ceil(counts.alumni)}</h2>
        <p>Alumni</p>
      </div>
    </div>
  );
};

export default NumberSection;