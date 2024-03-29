import React from "react";

function FeatureDiv({ imgUrl }) {
  return (
    <div
      className=" flex justify-center items-center text-center text-white  col-span-3 row-span-1 bg-green-800 rounded-xl"
      style={{ backgroundImage: `url('${imgUrl}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="max-w-prose backdrop-brightness-50 backdrop-blur-sm p-10 rounded-md">
      <p>September 12-22</p>
      <p className="font-bold text-2xl">Enjoy free home delivery in this summer</p>
      <p>How to walk and talk</p>
      <button className="bg-orange-500 mt-3  px-4 py-2 rounded-lg">Get started</button>
      </div>
    </div>
  );
}

export default FeatureDiv;
