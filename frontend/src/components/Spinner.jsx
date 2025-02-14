import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0  bg-opacity-30 z-50 flex items-center justify-center">
    <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-black animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:-.5s]"></div>
    </div>
  </div>
  
  );
};

export default Spinner;
