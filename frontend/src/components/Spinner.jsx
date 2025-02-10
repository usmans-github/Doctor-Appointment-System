import React from "react";

const Spinner = () => {
  return (
    <div class="fixed inset-0  bg-opacity-30 z-50 flex items-center justify-center">
    <div class="flex flex-row gap-2">
      <div class="w-4 h-4 rounded-full bg-white animate-bounce"></div>
      <div class="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
      <div class="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
    </div>
  </div>
  
  );
};

export default Spinner;
