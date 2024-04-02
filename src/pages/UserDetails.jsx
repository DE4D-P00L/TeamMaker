import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { logout } from "../features/userSlice.js";
import { useDispatch } from "react-redux";

const UserDetails = () => {
  const { uid } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [gender, setGender] = useState("");
  const [canUpdate, setCanUpdate] = useState(false);
  useEffect(() => {
    getUserDetails();
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserDetails = async () => {
    try {
      const user = await axios.get(import.meta.env.VITE_API + "/user/" + uid);
      setFirstName(user.data?.first_name);
      setLastName(user.data?.last_name);
      setEmail(user.data?.email);
      setDomain(user.data?.domain);
      setGender(user.data?.gender);
    } catch (error) {
      console.log(error);
    }
  };

  const updateHandler = async () => {
    const updateData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      domain: domain,
      gender: gender,
    };
    try {
      await axios.put(import.meta.env.VITE_API + "/user/" + uid, {
        updateData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async () => {
    axios.delete(import.meta.env.VITE_API + "/user/" + uid);
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="grid place-content-center min-h-[calc(100dvh-65px)] relative">
      <div className="absolute top-5 right-5 flex gap-4">
        <button
          className="text-xl bg-blue-700 text-white px-2 py-1 rounded-md"
          onClick={() => setCanUpdate((prev) => !prev)}>
          Update
        </button>
        <button className="text-3xl text-red-500" onClick={deleteHandler}>
          <MdDelete />
        </button>
      </div>
      <div>
        <h2 className="text-xl text-center my-3">User Details</h2>
        <div className="flex gap-2 flex-col">
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="rounded-md bg-slate-500 text-black placeholder:text-black px-2"
            placeholder="First name"
            disabled={!canUpdate}
          />
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="rounded-md bg-slate-500 text-black placeholder:text-black px-2"
            placeholder="Last name"
            disabled={!canUpdate}
          />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md bg-slate-500 text-black placeholder:text-black px-2"
            placeholder="Email"
            disabled={!canUpdate}
          />
          <input
            type="text"
            name="domain"
            id="domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="rounded-md bg-slate-500 text-black placeholder:text-black px-2"
            placeholder="Domain"
            disabled={!canUpdate}
          />
          <input
            type="text"
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="rounded-md bg-slate-500 text-black placeholder:text-black px-2"
            placeholder="Gender"
            disabled={!canUpdate}
          />
          {canUpdate && (
            <button
              className="bg-primary text-black rounded-md py-2"
              onClick={updateHandler}>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
