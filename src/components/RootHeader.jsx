// className={`text-blue-700 ${({ isActive }) => isActive ? text-orange-700 : text-blue-700}`}

import { NavLink } from "react-router-dom";

export default function RootHeader() {
  return (
    <div className="flex bg-black px-10 py-1 justify-between ">
      {/* nav: Home */}
      <NavLink
        to={"/"}
        className={`hover:text-gray-200 text-white px-5 py-1.5 self-start`}
      >
        Home
      </NavLink>

      <div className="flex px-5 py-1.5 justify-center">
        {/* nav: Travel */}
        <NavLink
          to="travel"
          className={`hover:text-gray-200 px-5 text-white ${({
            isActive,
          }) => (isActive ? "text-yellow-300 border-white" : "text-red-500")}`}
        >
          Travel
        </NavLink>

        {/* nav: Bright */}
        <NavLink
          to="bright"
          className={`hover:text-gray-200 px-5 text-white ${({
            isActive,
          }) => (isActive ? text - red - 600 : "")}`}
        >
          Bright
        </NavLink>
      </div>

      <div></div>
    </div>
  );
}
