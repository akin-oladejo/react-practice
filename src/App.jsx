import "./App.css";
import { Outlet } from "react-router-dom";
import { RootHeader } from "./components";

function App() {
  return (
    <div className="max-w-screen h-screen">
      <RootHeader/>
      <Outlet/>      
    </div>
  );
}

export default App;
