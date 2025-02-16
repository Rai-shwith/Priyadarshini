import React from "react";

const Background = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center gap-6 overflow-x-hidden">
      {children}
    </div>
  );
};

export default Background;
