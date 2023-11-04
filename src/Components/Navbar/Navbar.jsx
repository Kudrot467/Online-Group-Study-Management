import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="mr-2">
        {" "}
        <NavLink
          className="text-lg "
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "white" : "#CB6CE6",
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "#CB6CE6" : "white",
            };
          }}
          to="/"
        >
          Home
        </NavLink>{" "}
      </li>
      <li className="mr-2">
        {" "}
        <NavLink
          className="text-lg"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "white" : "#CB6CE6",
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "#CB6CE6" : "white",
            };
          }}
          to="/registration"
        >
          Registration
        </NavLink>{" "}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* links */}
            {navLinks}
          </ul>
        </div>
        {/* <h2 className="text-[#CB6CE6] text-2xl font-bold text-center">Study <br />
        <span className="text-[#98198E] text-xl">WITH FRIENDS</span>
        </h2> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* links */}
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {" "}
        <NavLink
          className="px-4 py-2 rounded-xl text-lg"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "white" : "#CB6CE6",
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "#CB6CE6" : "white",
            };
          }}
          to="/login"
        >
          Login
        </NavLink>{" "}
      </div>
    </div>
  );
};

export default Navbar;
