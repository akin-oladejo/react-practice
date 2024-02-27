import React from "react";

function Card({ title, value, className, tags, blurHeader, children }) {
  return (
    <div
      className={`flex-col bg-zinc-800 rounded-[1.5rem] shadow-lg text-white p-5 m-5 relative ${className} min-h-56`}
    >
      <div className={`absolute top-4`}>
        <div className="text-1 text-gray-400">{title}</div>
        <div className="text-2xl">{value}</div>
        {tags?<div className="my-2">{tags.map(tag=><span className="bg-gray-800 rounded-[0.8rem] border-[1px] px-3 py-1 text-sm me-2">{tag}</span>)}</div>:null}
      </div>

      {children}
    </div>
  );
}

export default Card;
