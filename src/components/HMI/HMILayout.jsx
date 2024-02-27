import React from "react";
import Card from "./Card";

function HMILayout({ className }) {
  return (
    <div className={` ${className}`}>
      {/* weather and Now playing */}
      <div className="flex flex-col basis-1/3">
        <Card title={"Weather Today"} value={"16°C"} className={"basis-1/4"}></Card>
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
        <div className="flex flex-col px-5">
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
