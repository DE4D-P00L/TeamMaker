import { useForm } from "react-hook-form";
import useSignup from "../hooks/useSignup.js";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await signUpUser(data);
    if (res) navigate("/");
  };

  const { signUpUser } = useSignup();

  return (
    <div className="grid place-content-center min-h-[calc(100dvh-75px)]">
      <form
        className="flex flex-col bg-slate-700 p-4 rounded-md "
        onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold text-center my-5">Signup</h2>
        <label>First Name</label>
        <input
          type="text"
          {...register("first_name")}
          placeholder="Enter first name"
          className="bg-slate-500 rounded-md px-3 py-1.5 text-black"
        />
        <label>Last Name</label>
        <input
          type="text"
          {...register("last_name")}
          placeholder="Enter last name"
          className="bg-slate-500 rounded-md px-3 py-1.5 text-black"
        />
        <label>Email</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Enter email"
          className="bg-slate-500 rounded-md px-3 py-1.5 text-black"
        />
        <label>Domain</label>
        <input
          type="text"
          {...register("domain")}
          placeholder="Enter domain"
          className="bg-slate-500 rounded-md px-3 py-1.5 text-black"
        />
        <label>Gender</label>
        <input
          type="text"
          {...register("gender")}
          placeholder="Enter gender"
          className="bg-slate-500 rounded-md px-3 py-1.5 text-black"
        />
        <label>avatar</label>
        <input
          type="text"
          {...register("avatar")}
          placeholder="avatar"
          className="bg-slate-500 rounded-md px-3 py-1.5 text-black"
        />
        <button
          className="mt-5 py-2 bg-primary text-black rounded-md"
          type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};
export default Signup;
