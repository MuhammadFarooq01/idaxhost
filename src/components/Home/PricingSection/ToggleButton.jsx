import React from "react";

const ToggleButton = ({ leftLabel, rightLabel, isChecked, onToggle }) => {
  const toggleClass = isChecked ? "translate-x-full" : "translate-x-0";

  return (
    <div className="flex items-center justify-center space-x-4">
      <span
        className={` font-bold ${isChecked ? "text-gray-500" : "text-navy"}`}
      >
        {leftLabel}
      </span>
      <div
        className="relative inline-block w-14 h-8 rounded-full cursor-pointer"
        onClick={() => onToggle(!isChecked)}
      >
        <input type="checkbox" className="sr-only" checked={isChecked} />
        <div
          className={`block w-14 h-8 rounded-full ${
            isChecked ? "bg-gray-200" : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform duration-300 ease-in-out transform ${toggleClass} bg-gradient-to-r from-btn-blue-light to-btn-blue-dark hover:from-btn-blue-dark hover:to-btn-blue-dark transition-all duration-500`}
        ></div>
      </div>
      <span
        className={` font-bold ${isChecked ? "text-navy" : "text-gray-500"}`}
      >
        {rightLabel}
      </span>
    </div>
  );
};

export default ToggleButton;
