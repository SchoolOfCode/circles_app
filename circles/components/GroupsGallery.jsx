import { data } from "../data/events-data";
import { useState } from "react";
import GroupCard from "./GroupCard";
import GroupModal from "./GroupModal";

export default function GroupsGallery() {
  const [modalInfo, setModalInfo] = useState(false);
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
        className="mt-40 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {data.map((club) => (
          <GroupCard club={club} setModalInfo={() => setModalInfo(club)} />
        ))}
      </ul>
    </div>
    //</div>
  );
}
