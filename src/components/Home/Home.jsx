import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-start px-10 my-10 ">
      <h1 className="text-4xl my-4 font-bold">Converting Designs using React</h1>

      <div className="my-2 flex flex-col items-start">
        <h2 className="text-3xl font-bold">Single-page Projects</h2>
        <NavLink to="/travel" className="text-blue-700 hover:text-blue-500">
          1. Travel Page
        </NavLink>
        <NavLink to="/bright" className="text-blue-700 hover:text-blue-500">
          2. Bright
        </NavLink>
      </div>

      <div className="my-2 flex flex-col items-start">
        <h2 className="text-3xl font-bold">API Apps</h2>
        <NavLink to="/hmi" className="text-blue-700 hover:text-blue-500">
          3. Vehicle HMI
        </NavLink>
        <NavLink to="/retroart" className="text-blue-700 hover:text-blue-500">
          4. RetroArt
        </NavLink>
      </div>

      <div className="my-2 flex flex-col items-start">
        <h2 className="text-3xl font-bold">Multi-page Projects</h2>
        <div className="text-2">5. Squarespace</div>
        <div className="text-2">6. Cordyline</div>
      </div>
    </div>
  );
}

export default Home;
