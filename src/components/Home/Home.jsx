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
        <NavLink to="/booking" className="text-blue-700 hover:text-blue-500">
          2. Booking Services
        </NavLink>
      </div>

      <div className="my-2 flex flex-col items-start">
        <h2 className="text-3xl font-bold">Multi-page Projects</h2>
        <div className="text-2">3. Squarespace</div>
        <div className="text-2">4. Cordyline</div>
      </div>

      <div className="my-2 flex flex-col items-start">
        <h2 className="text-3xl font-bold">API Apps</h2>
        <div className="text-2">5. RetroArt</div>
        <div className="text-2">6. Vehicle HMI</div>
      </div>
    </div>
  );
}

export default Home;
