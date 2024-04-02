import { useState } from "react";
import axios from "axios";

const useGetUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUsers = async (page, gender, domain, search, avail) => {
    try {
      setLoading(true);
      const paramsObj = { page, gender, domain, search };
      if (avail === "true") paramsObj.available = true;
      const fetchedData = await axios.get(import.meta.env.VITE_API + "/users", {
        params: paramsObj,
      });
      setData(fetchedData?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getUsers,
    data,
  };
};

export default useGetUsers;
