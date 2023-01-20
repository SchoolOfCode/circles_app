// import { data } from "../data/clubs-data";
import { useState } from "react";
import GroupCard from "./GroupCard";
import GroupModal from "./GroupModal";
//import SearchBar from "./SearchBar";
import FuzzySearchBar from "./FuzzySearch";
import { v4 as uuidv4 } from 'uuid';

export default function GroupsGallery({data}) {
  const [modalInfo, setModalInfo] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [groupsData, setGroupsData] = useState([...data]);

  function findMatch(key) {
    return (key || "").toLowerCase().includes(searchValue);
  }

  let filteredResults = groupsData.filter(
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

  const handleOnSearch = (string) => {
    setSearchValue(string.toLowerCase());
  };

  const handleOnSelect = (item) => {
    setSearchValue(item.name.toLowerCase());
  };

  return (
    <div className="pt-32 px-10 bg-gradient-to-b from-yellow-100 to-blue-200 w-full">
      <FuzzySearchBar

        className="mb-8 w-full max-w-md"

        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        styling={{ zIndex: 4 }} // To display it on top of the search box below
        autoFocus
      />
      <div
        className="bg-gradient-to-b from-yellow-100 to-blue-200 min-h-screen w-full"
        style={{
          position: "fixed",
          // width: "100vw",
          // height: "100vh",
          left: "0",
          top: "0",
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
        className="mb-10 xl:ml-20 xl:mr-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-h-[100%] max-w-[100%]"
      >
        {filteredResults.map((club) => (
          <GroupCard key={uuidv4()} club={club} setModalInfo={() => setModalInfo(club)} />
        ))}
      </ul>
    </div>
    //</div>
  );
}
