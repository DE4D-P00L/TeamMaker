import { useState } from "react";
import axios from "axios";

const useGetFilters = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getFilters = async () => {
    try {
      setLoading(true);
      const fetchedData = await axios.get(
        import.meta.env.VITE_API + "/filters"
      );
      setData(fetchedData?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getFilters,
    data,
  };
};

export default useGetFilters;
