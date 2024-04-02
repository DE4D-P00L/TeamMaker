import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const users = useSelector((state) => state.team.users);
  const loggedInUser = useSelector((state) => state.user.user);
  return (
    <nav className="sticky w-full z-10 top-0 left-0 bg-base-100 border-white border-b h-[65px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <h2 className="text-2xl font-bold ">TeamMaker</h2>

        <div className="flex items-center gap-5">
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
    </nav>
  );
};
export default NavBar;
