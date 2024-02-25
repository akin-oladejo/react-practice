import "./App.css";
import { Outlet } from "react-router-dom";
import { RootHeader } from "./components";

function App() {
  return (
    <>
      <RootHeader/>
      <Outlet/>      
    </>
  );
}

export default App;
