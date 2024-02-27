import React from "react";

function ControlCentre({
  className
}) {
  const now = new Date();
  // const hours = now.getHours().toString().padStart(2, "0");
  // const minutes = now.getMinutes().toString().padStart(2, "0");
  const time = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  return (
    <div className={` ${className}`}>

      {/* prompt for destination */}
      <label className="flex gap-2 items-center">
        Destination:
        <input
          type="search"
          placeholder="Enter a destination"
          name="destination"
          id=""
          className="rounded-lg px-3 py-1 text-white bg-zinc-900 border-[1px] border-slate-400"
        />
      </label>

      {/* time, bluetooth icons */}
      <div className="flex gap-2 items-center">
        <span>●●● 5G</span>
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/fluency/48/bluetooth.png"
          alt="bluetooth"
        />
        <span>16°C</span>
        <span>
          {time}
        </span>
      </div>
    </div>
  );
}

export default ControlCentre;
