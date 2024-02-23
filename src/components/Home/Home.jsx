import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="text-3xl">React Practice by Dami</h1>

      <div>
        <h2 className="text-2">Single-page Projects</h2>
        <div><Link to='/travel'>Travel Page</Link></div>
        <div><Link to='/booking'>Booking Services</Link></div>
      </div>

      <div>
        <h2 className="text-2">Multi-page Projects</h2>
        <div className="text-2">Squarespace</div>
        <div className="text-2">Cordyline</div>
      </div>

      <div>
        <h2 className="text-2">API Apps</h2>
        <div className="text-2">RetroArt</div>
        <div className="text-2">Vehicle HMI</div>
      </div>
    </>
  );
}

export default Home;
