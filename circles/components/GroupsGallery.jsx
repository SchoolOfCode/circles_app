import { data } from "../data/events-data";
import { useState } from "react";
import GroupCard from "./GroupCard";

export default function GroupsGallery() {
  const [selectedId, setSelectedId] = useState(-1);
  const [groupInfo, setGroupInfo] = useState(false);
  // console.log(data)

  return (
    //<div className="w-[1000px] h-[300px]">
    <div className="boxes">
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          left: "0",
          top: "0",
          background: "blue",
          zIndex: "2",
          display: groupInfo ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "40vw",
            height: "40vh",
            background: "pink",
            position: "relative",
            overflowY: "scroll",
          }}
        >
          <button
            className="absolute right-0 top-0"
            onClick={() => setGroupInfo(false)}
          >
            Close
          </button>
          <h1>{groupInfo.name}</h1>
          <h2>{groupInfo.tagline}</h2>
        </div>
      </div>
      <ul
        role="list"
        className="mt-40 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {data.map((club) => (
          <GroupCard club={club} setGroupInfo={() => setGroupInfo(club)} />
        ))}
      </ul>
    </div>
    //</div>
  );
}
