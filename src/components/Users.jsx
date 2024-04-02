import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useGetUsers from "../hooks/useGetUsers";
import Card from "./ui/Card";

const Users = ({
  page,
  setPage,
  domainFilter,
  genderFilter,
  search,
  avail,
}) => {
  useEffect(() => {
    fetchInitialUsers();
  }, [page, domainFilter, genderFilter, search, avail]);

  const { loading, getUsers, data } = useGetUsers();

  const fetchInitialUsers = async () => {
    await getUsers(page, genderFilter, domainFilter, search, avail);
  };
  return (
    <div className="flex-1">
      <h2 className="text-2xl my-5 text-center">Users</h2>
      {!loading && (
        <div className="flex gap-3 flex-wrap justify-center bg-[#171c22] p-3 rounded-md">
          {data?.users?.map((user) => (
            <Card user={user} key={user._id} />
          ))}
        </div>
      )}
      <div className="flex justify-center items-center text-3xl mt-10 mb-5 gap-3">
        <button
          disabled={page === 1}
          onClick={() => {
            if (page !== 1) setPage((prev) => prev - 1);
          }}>
          <FaChevronLeft className={`${page === 1 && "text-transparent"}`} />
        </button>
        <span className="text-xl">
          {!loading && `${data?.page}/${data?.pageCount}`}
        </span>
        <button
          disabled={page === data?.pageCount}
          onClick={() => {
            if (page !== data?.pageCount) setPage((prev) => prev + 1);
          }}>
          <FaChevronRight
            className={`${page === data?.pageCount && "text-transparent"}`}
          />
        </button>
      </div>
    </div>
  );
};
export default Users;
