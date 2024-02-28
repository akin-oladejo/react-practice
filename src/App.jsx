import "./App.css";
import { Outlet } from "react-router-dom";
import { RootHeader } from "./components";

function App() {
  return (
    <div className="max-w-screen h-screen pb-10">
      <RootHeader/>
      <Outlet/>      
    </div>
  );
}

export default App;
