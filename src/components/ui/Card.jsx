import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/teamSlice.js";
import { addDomain, RemoveDomain } from "../../features/domainSlice.js";
import { useState } from "react";

const Card = ({ user }) => {
  const { avatar, domain, email, first_name, last_name, gender, available } =
    user;
  const domains = useSelector((state) => state.domain.domain);
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const addUserHandler = (user) => {
    if (domains.includes(user.domain))
      return alert(user.domain + " user already exists");
    dispatch(addDomain(user.domain));
    dispatch(addUser(user));
    setAdded(true);
  };

  return (
    <div className="w-[200px] flex flex-col bg-neutral px-3 py-5 rounded-md justify-between">
      <div className="flex flex-col">
        <div className="flex justify-between items-start">
          <img src={avatar} alt="avatar" className="bg-white rounded-full" />
          <div className="badge badge-primary badge-outline">{gender}</div>
        </div>
        <h3>{`${first_name} ${last_name}`}</h3>
        <p className="text-sm break-words">{email}</p>
        <div className="flex w-full justify-between mt-3">
          <div className="badge badge-md badge-accent">{domain}</div>
        </div>
      </div>
      <button
        className={`py-2 ${
          available
            ? "bg-secondary text-primary-content"
            : "bg-base-100 text-content"
        } rounded-md mt-3 w-full`}
        disabled={!available || added}
        onClick={() => addUserHandler(user)}>
        {available ? (!added ? "Add to Team" : "In cart") : "Not Available"}
      </button>
    </div>
  );
};
export default Card;
