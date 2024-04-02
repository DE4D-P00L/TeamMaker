const TeamCard = ({ user }) => {
  const { avatar, domain, email, first_name, last_name, gender } = user;
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
    </div>
  );
};
export default TeamCard;
