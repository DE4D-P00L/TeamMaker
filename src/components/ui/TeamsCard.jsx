import { Link } from "react-router-dom";

const TeamsCard = ({ team }) => {
  return (
    <Link
      className="w-[200px] bg-neutral rounded-md p-2 cursor-pointer select-none"
      to={`/team/${team._id}`}>
      <h2>{team.name}</h2>
      <h3>Members: {team.members.length}</h3>
    </Link>
  );
};
export default TeamsCard;
