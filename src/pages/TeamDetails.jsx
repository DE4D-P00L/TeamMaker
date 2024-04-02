import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamCard from "../components/ui/TeamCard";

const TeamDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});
  useEffect(() => {
    getTeamDetails();
  }, []);

  const getTeamDetails = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_API + "/team/" + id
      );
      setTeam(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-4">
      <h2 className="text-2xl font-semibold">Team Details</h2>
      <h3 className="text-xl text-center my-5">{team?.name}</h3>
      <div className="flex flex-wrap gap-3 justify-center items-center">
        {team?.name &&
          team?.members?.map((member, idx) => (
            <TeamCard key={idx} user={member} />
          ))}
      </div>
    </div>
  );
};
export default TeamDetails;
