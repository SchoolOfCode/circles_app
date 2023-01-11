import { data } from "../data/events-data";
import { useState } from "react";
import GroupCard from "./GroupCard";
import GroupModal from "./GroupModal";
import SearchBar from "./SearchBar";

export default function GroupsGallery() {
  const [modalInfo, setModalInfo] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [groupsData, setGroupsData] = useState([...data]);

  function handleChange(e) {
    let value = e.target.value;
    setSearchValue(value.toLowerCase().trim());
  }

  function findMatch(key) {
    return (key || "").toLowerCase().includes(searchValue);
  }

  const filteredResults = groupsData.filter(
    ({
      circle,
      description,
      category,
      location,
      availability,
      times,
      days,
    }) => {
      return (
        findMatch(circle) ||
        findMatch(description) ||
        findMatch(category) ||
        findMatch(location) ||
        findMatch(availability) ||
        findMatch(times) ||
        findMatch(days)
      );
    }
  );

  return (
    //<div className="w-[1000px] h-[300px]">
    <div>
      <SearchBar
        placeholder="e.g. chess club"
        className="bg-yellow-200 absolute top-36 left-[45%]"
        value={searchValue}
        handleChange={handleChange}
        labelText="Search for Circles"
      />
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          left: "0",
          top: "0",
          background: "#AED4E6",
          zIndex: "2",
          display: modalInfo ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GroupModal club={modalInfo} hideModal={() => setModalInfo(false)} />
      </div>
      <ul
        role="list"
        className="mt-60 ml-10 mr-10 mb-10 xl:ml-20 xl:mr-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-h-[100%] max-w-[100%]"
      >
        {filteredResults.map((club) => (
          <GroupCard club={club} setModalInfo={() => setModalInfo(club)} />
        ))}
      </ul>
    </div>
    //</div>
  );
}
