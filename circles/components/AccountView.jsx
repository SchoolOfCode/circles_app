import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import UserPane from "./UserPane/UserPane";
import EventsDisplay from "./EventsDisplay";

const data = {
  user: "John Doe",
  linkWorker: "Lynne Summers",
  email: "johndoe@test.com",
  dateJoined: "09/01/2023",
  linkWorkerEmail: "lynnesummers@cab.com",
  circles: ["swimming club, mountain climbing"],
};

export default function AccountView() {
  const [profilePane, setProfilePane] = useState({
    visible: false,
    data: null,
  });

  function closePane() {
    setProfilePane({ ...profilePane, visible: false });
  }
  return (
    <>
      <div className="flex align-middle w-screen h-screen">
        <UserPane
          visible={profilePane.visible}
          data={profilePane.data}
          closePane={closePane}
        />
        <div className="flex justify-evenly w-[80vw] h-[85vh]">
          <button
            onClick={() =>
              setProfilePane({ ...profilePane, visible: true, data: data })
            }
          >
            <CgProfile />
          </button>
          <h1>Is this visible? {profilePane.visible ? "yes" : "no"}</h1>
          <EventsDisplay />
        </div>
      </div>
    </>
  );
}
