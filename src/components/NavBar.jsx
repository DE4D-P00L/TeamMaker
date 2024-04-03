import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

const NavBar = () => {
  const users = useSelector((state) => state.team.users);
  const loggedInUser = useSelector((state) => state.user.user);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <nav className="sticky w-full z-10 top-0 left-0 bg-base-100 border-white border-b h-[65px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full sm:px-0 px-2">
        <h2 className="text-2xl font-bold ">TeamMaker</h2>
        <div className={`items-center gap-5 sm:flex hidden`}>
          {loggedInUser && <Link to="/">Users</Link>}
          {loggedInUser && users?.length > 0 && (
            <Link
              to="/team"
              className={`${users?.length > 0 && "animate-pulse"}`}>
              Team Cart
            </Link>
          )}
          <Link to="teams">Teams</Link>
          {loggedInUser && (
            <Link to={`/user/${loggedInUser._id}`}>
              <img
                src={loggedInUser.avatar}
                alt="avatar"
                className="bg-white rounded-full size-[30px]"
              />
            </Link>
          )}
          {!loggedInUser && (
            <Link
              to="/login"
              className="bg-base-content text-black px-3 py-1.5 rounded-md">
              Login
            </Link>
          )}
        </div>
        <button
          className="sm:hidden block"
          onClick={() => setMenuOpen((prev) => !prev)}>
          <CiMenuFries className="text-2xl" />
        </button>
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-[67px] left-0 z-10 bg-base-200/80 backdrop-blur-sm w-full p-10 sm:hidden text-xl font-semibold`}>
          <div
            className={`items-center gap-7 flex flex-col mx-auto`}
            onClick={() => setMenuOpen(false)}>
            {loggedInUser && <Link to="/">Users</Link>}
            {loggedInUser && users?.length > 0 && (
              <Link
                to="/team"
                className={`${users?.length > 0 && "animate-pulse"}`}>
                Team Cart
              </Link>
            )}
            <Link to="teams">Teams</Link>
            {loggedInUser && (
              <Link to={`/user/${loggedInUser._id}`}>
                <img
                  src={loggedInUser.avatar}
                  alt="avatar"
                  className="bg-white rounded-full size-[30px]"
                />
              </Link>
            )}
            {!loggedInUser && (
              <Link
                to="/login"
                className="bg-base-content text-black px-3 py-1.5 rounded-md">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
