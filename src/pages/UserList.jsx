import { useEffect, useState } from "react";
import Filters from "../components/Filters.jsx";
import Users from "../components/Users.jsx";

const UserList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [domainFilter, setDomainFilter] = useState([]);
  const [genderFilter, setGenderFilter] = useState([]);
  const [avail, setAvail] = useState("false");

  return (
    <div className="max-w-7xl mx-auto flex gap-3 sm:flex-row flex-col">
      <Filters
        setPage={setPage}
        setDomainFilter={setDomainFilter}
        setGenderFilter={setGenderFilter}
        search={search}
        setSearch={setSearch}
        avail={avail}
        setAvail={setAvail}
      />
      <Users
        page={page}
        search={search}
        setPage={setPage}
        avail={avail}
        domainFilter={domainFilter}
        genderFilter={genderFilter}
      />
    </div>
  );
};
export default UserList;
