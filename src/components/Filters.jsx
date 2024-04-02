import { useEffect } from "react";
import useGetFilters from "../hooks/useGetFilters.js";
import { useForm } from "react-hook-form";

const Filters = ({
  setPage,
  setDomainFilter,
  setGenderFilter,
  search,
  setSearch,
  avail,
  setAvail,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      available: avail,
    },
  });

  useEffect(() => {
    fetchFilters();
  }, []);

  const {
    loading: loadingFilters,
    getFilters,
    data: filters,
  } = useGetFilters();

  const onSubmit = async (data) => {
    let trueValuesDomain = [];
    for (const key in data.domains) {
      if (data.domains[key]) {
        trueValuesDomain.push(key);
      }
    }
    let trueValuesGender = [];
    for (const key in data.genders) {
      if (data.genders[key]) {
        trueValuesGender.push(key);
      }
    }

    if (trueValuesGender.length === 1) trueValuesGender = trueValuesGender[0];
    if (trueValuesDomain.length === 1) trueValuesDomain = trueValuesDomain[0];

    setPage(1);
    setAvail(data.available);
    setDomainFilter(trueValuesDomain);
    setGenderFilter(trueValuesGender);
  };

  const fetchFilters = async () => {
    await getFilters();
  };

  return (
    <div className="w-[300px] my-10 flex flex-col p-3 bg-neutral rounded-md h-fit">
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="bg-gray-200 rounded-full w-full my-3 text-black px-3 py-2"
        />
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl mb-3">Domains</h2>
        {loadingFilters && <p>Loading...</p>}
        {!loadingFilters &&
          filters?.uniqueDomains?.map((domain) => (
            <label key={domain._id}>
              <input type="checkbox" {...register(`domains[${domain._id}]`)} />{" "}
              {`${domain._id}`}
            </label>
          ))}
        <h2 className="text-xl mb-3 mt-5">Genders</h2>
        {loadingFilters && <p>Loading...</p>}
        {!loadingFilters &&
          filters?.uniqueGenders?.map((gender) => (
            <label key={gender._id}>
              <input type="checkbox" {...register(`genders[${gender._id}]`)} />{" "}
              {`${gender._id}`}
            </label>
          ))}
        <h2 className="text-xl mb-3 mt-5">Availability</h2>
        <label className="flex gap-2">
          <input type="radio" {...register("available")} value="false" />
          All
        </label>
        <label className="flex gap-2">
          <input type="radio" {...register("available")} value="true" />
          Available
        </label>
        <button
          className="bg-accent text-black py-2 mt-5 rounded-md"
          type="submit">
          Filter
        </button>
      </form>
    </div>
  );
};
export default Filters;
