import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dbUsers, setDbUsers] = useState([]);

  useEffect(() => {
    fetch(`https://1001-ogsf-server.vercel.app/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setDbUsers(data));
  }, []);

  const signOut = () => {
    logOut().then().catch();
  };
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
          to="/allAssignments"
        >
          Assignments
        </NavLink>{" "}
      </li>
    </>
  );

  const userNavlinks = (
    <>
      <li className="mr-2">
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
          to="/createAssignment"
        >
          Create Assignment
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
          to="/myAssignments"
        >
          My Assignments
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
          to="/submittedAssignments"
        >
          Submitted Assignments
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
            {user && userNavlinks}
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
          {user && userNavlinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col">
              {dbUsers.map((dbUser) => (
                <div key={dbUser._id}>
                  <div>
                    <div className="avatar online">
                      <div
                        className="w-24 rounded-full tooltip"
                        data-tip={
                          dbUser.email == user?.email ? (
                            <p>{dbUser.userName}</p>
                          ) : (
                            <p>{user?.email}</p>
                          )
                        }
                      >
                        <img
                          className="w-24 rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                      </div>
                    </div>
                    {dbUser.email == user?.email ? (
                      <p>{dbUser.userName}</p>
                    ) : (
                      <p>{user?.displayName}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={signOut}
              className="btn bg-[#CB6CE6] hover:bg-[#CB6CE6] text-white"
            >
              Logout
            </button>
          </div>
        ) : (
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
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
