import React from "react";
import HMIMenu from "./HMIMenu";
import Card from "./Card";
import ControlCentre from "./ControlCentre";
import HMILayout from "./HMILayout";

function HMIPage() {
  return (
    <div className="parent bg-zinc-900 size-full flex border-purple-600">
      <HMIMenu className={'flex flex-col text-white absolute w-16 h-full items-center justify-center bg-zinc-800 px-2 gap-10'}/>

      <div className="grow ps-16">
        <ControlCentre className="flex justify-between text-white px-10 pt-5 w-full"/>
        <HMILayout className="flex px-10 justify-around h-5/6"/>
      </div>
    </div>
  );
}

export default HMIPage;
