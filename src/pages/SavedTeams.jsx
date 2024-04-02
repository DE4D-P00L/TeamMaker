import axios from "axios";
import { useEffect, useState } from "react";
import TeamsCard from "../components/ui/TeamsCard";

const SavedTeams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    getTeams();
  }, []);
  const getTeams = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API + "/teams");
      setTeams(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold my-5">Teams</h2>
      <div className="flex gap-3 flex-wrap">
        {teams?.length > 0 &&
          teams?.map((team) => <TeamsCard key={team._id} team={team} />)}
      </div>
    </div>
  );
};
export default SavedTeams;
