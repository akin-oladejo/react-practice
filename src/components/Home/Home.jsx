import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl my-4">Converting Designs using React</h1>

      <div className="my-2 flex flex-col items-center">
        <h2 className="text-2xl">Single-page Projects</h2>
        <NavLink to="/travel" className="text-blue-700 hover:text-blue-500">
          Travel Page
        </NavLink>
        <NavLink to="/booking" className="text-blue-700 hover:text-blue-500">
          Booking Services
        </NavLink>
      </div>

      <div className="my-2 flex flex-col items-center">
        <h2 className="text-2xl">Multi-page Projects</h2>
        <div className="text-2">Squarespace</div>
        <div className="text-2">Cordyline</div>
      </div>

      <div className="my-2 flex flex-col items-center">
        <h2 className="text-2xl">API Apps</h2>
        <div className="text-2">RetroArt</div>
        <div className="text-2">Vehicle HMI</div>
      </div>
    </div>
  );
}

export default Home;
