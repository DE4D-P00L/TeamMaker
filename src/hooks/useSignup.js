import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice.js";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const signUpUser = async (user) => {
    try {
      setLoading(true);
      const data = await axios.post(import.meta.env.VITE_API + "/user", {
        user,
      });
      dispatch(
        login({ email: data.data.email, id: data.data._id, user: data.data })
      );
      setLoading(false);
      return true;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return false;
    }
  };

  return {
    loading,
    signUpUser,
  };
};

export default useSignup;
