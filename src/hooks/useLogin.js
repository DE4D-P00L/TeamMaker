import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice.js";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const loginUser = async (email) => {
    try {
      setLoading(true);
      const data = await axios.post(import.meta.env.VITE_API + "/login", {
        email,
      });
      dispatch(login({ email, id: data.data._id, user: data.data }));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    loginUser,
  };
};

export default useLogin;
