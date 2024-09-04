import React, { useState } from "react";

const Tooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-sm z-10">
          {content}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
