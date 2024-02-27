import React from "react";
import Card from "./Card";

function HMILayout({ className }) {
  return (
    <div className={` ${className}`}>
      {/* weather and Now playing */}
      <div className="flex flex-col basis-1/3">
        <Card title={"Weather Today"} value={"16°C"} className={"basis-1/4"}>
          <div className="flex gap-5 text-sm">
            <div className="flex flex-col">
              {/* precipitation */}
              <p className="text-zinc-400">Precipitation</p>
              <p className="font-bold">0%</p>
            </div>

            {/* humidity */}
            <div className="flex flex-col">
              <p className="text-zinc-400">Humidity</p>
              <p className="font-bold">35%</p>
            </div>

            {/* wind */}
            <div className="flex flex-col">
              <p className="text-zinc-400"  >Wind</p>
              <p className="font-bold">5km/h</p>
            </div>
          </div>
        </Card>
        <Card
          title={"Now Playing"}
          value={"Hitboy x Smino"}
          blurHeader={true}
          className={"grow"}
        ></Card>
      </div>

      <Card
        title={"Today's Destination"}
        value={"Santa Monica"}
        tags={["50km"]}
        className="basis-1/3"
      ></Card>
      <Card
        title={"Car Functionalities"}
        value={"Quick Controls"}
        className="basis-1/3"
      >
        <div className="flex flex-col">
          {/* lights */}
          <label>
            Lights
            <input type="checkbox" name="" id="" />
          </label>

          {/* locks */}
          <label>
            Locks
            <input type="checkbox" name="" id="" />
          </label>

          {/* autopilot */}
          <label>
            Autopilot
            <input type="checkbox" name="" id="" />
          </label>

          <hr />

          {/* display */}
          <div>Display</div>

          {/* driving */}
          <div>Driving</div>
        </div>
      </Card>
    </div>
  );
}

export default HMILayout;
