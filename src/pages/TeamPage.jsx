import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TeamCard from "../components/ui/TeamCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { emptyTeam } from "../features/teamSlice";

const TeamPage = () => {
  const [name, setName] = useState("Team Name");
  const users = useSelector((state) => state.team.users);
  const loggedInUser = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedInUser) navigate("/login");
  }, []);

  const saveTeamHandler = async () => {
    console.log(name, users);
    const userIds = users.map((user) => user._id);
    console.log(userIds);
    const res = await axios.post(import.meta.env.VITE_API + "/team", {
      name,
      members: userIds,
    });
    setName("");
    dispatch(emptyTeam());
    navigate("/team/" + res.data._id);
  };

  return (
    <div className="max-w-7xl mx-auto py-4">
      <h2 className="text-xl">Team Info</h2>
      <div className="flex mt-8 gap-3">
        <input
          type="text"
          name="team"
          id="team"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-[300px] bg-slate-400 px-3 py-1.5 rounded text-black placeholder:text-black"
          placeholder="Enter team name"
        />
        <button
          className="bg-secondary text-black rounded-md px-3"
          onClick={saveTeamHandler}>
          Save
        </button>
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-5">
        {users?.length > 0 &&
          users.map((user) => <TeamCard user={user} key={user._id} />)}
      </div>
    </div>
  );
};
export default TeamPage;
