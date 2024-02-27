import React from "react";

function Card({ title, value, className, tags, blurHeader, children }) {
  return (
    <div
      className={`flex-col bg-zinc-800 rounded-[1.5rem] shadow-lg text-white p-5 m-5 relative ${className} min-h-56`}
    >
      <div className={`absolute top-2`}>
        <div className="text-1 text-gray-400">{title}</div>
        <div className="text-2xl">{value}</div>
      </div>

      {children}
    </div>
  );
}

export default Card;
