import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl">React Practice by Dami</h1>
      <h2 className="text-2">Single-page</h2>
      <ul>
        <li key={1}>Travel Page</li>
        <li key={2}>Booking Service</li>
      </ul>
      <h2 className="text-2">Multi-page</h2>
      <ul>
        <li key={3}>Travel Page</li>
        <li key={4}>Booking Service</li>
      </ul>
      <h2 className="text-2">API apps</h2>
      <ul>
        <li key={5}>RetroArt</li>
        <li key={6}>Cordyline</li>
      </ul>
    </>
  );
}

export default App;
