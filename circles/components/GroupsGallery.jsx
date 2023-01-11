import { data } from "../data/events-data";
import { useState } from "react";
import GroupCard from "./GroupCard";
import GroupModal from "./GroupModal";
//import SearchBar from "./SearchBar";
import FuzzySearchBar from "./FuzzySearch";

export default function GroupsGallery() {
  const [modalInfo, setModalInfo] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [groupsData, setGroupsData] = useState([...data]);

  const items = [
    { id: 1, name: "Chess" },
    { id: 2, name: "Swimming" },
    { id: 3, name: "Exercise" },
  ];

  let fuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["name"],
  };

  const handleOnSearch = (string, results) => {
    setSearchValue(string);
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  const formatResult = (item) => {
    console.log(item);
    return (
      <div className="result-wrapper">
        <span className="result-span">id: {item.id}</span>
        <span className="result-span">name: {item.name}</span>
      </div>
    );
  };
  // const formatResult = (item) => {
  //   return (
  //     <>
  //       <span style={{ display: "block", textAlign: "left" }}>
  //         name: {item.name}
  //       </span>
  //     </>
  //   );
  // };

  function handleChange(e) {
    let value = e.target.value;
    setSearchValue(value.toLowerCase().trim());
  }

  // function findMatch(key) {
  //   return (key || "").toLowerCase().includes(searchValue);
  // }

  // const filteredResults = groupsData.filter(
  //   ({
  //     circle,
  //     description,
  //     category,
  //     location,
  //     availability,
  //     times,
  //     days,
  //   }) => {
  //     return (
  //       findMatch(circle) ||
  //       findMatch(description) ||
  //       findMatch(category) ||
  //       findMatch(location) ||
  //       findMatch(availability) ||
  //       findMatch(times) ||
  //       findMatch(days)
  //     );
  //   }
  // );

  return (
    //<div className="w-[1000px] h-[300px]">
    <div>
      <FuzzySearchBar
        items={items}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
        styling={{ zIndex: 4 }} // To display it on top of the search box below
        fuseOptions={fuseOptions}
        autoFocus
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
        {data.map((club) => (
          <GroupCard club={club} setModalInfo={() => setModalInfo(club)} />
        ))}
      </ul>
    </div>
    //</div>
  );
}
