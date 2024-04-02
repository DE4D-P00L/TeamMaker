import { useState } from "react";
import useLogin from "../hooks/useLogin.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const { loginUser } = useLogin();
  const navigate = useNavigate();

  const loginHandler = async () => {
    await loginUser(email);
    navigate("/");
  };

  return (
    <div className="grid place-content-center min-h-[calc(100dvh-75px)]">
      <div className="flex flex-col bg-slate-700 p-4 rounded-md ">
        <h2 className="text-2xl font-semibold text-center my-5">Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-slate-500 rounded-md px-3 py-1.5 text-black"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-slate-500 rounded-md px-3 py-1.5 text-black"
        />
        <button
          className="mt-5 py-2 bg-primary text-black rounded-md"
          onClick={loginHandler}>
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
