import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import UserPane from "./UserPane";

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

function closePane(){
  setProfilePane({...profilePane, visible:false})
  }
  return (
    <>
      <div className="flex justify-evenly align-middle w-[100vw]">
       <UserPane
        visible={profilePane.visible}
        data={profilePane.data}
        closePane={closePane}
       />
        <button
          onClick={() =>
            setProfilePane({...profilePane, visible:true, data:data})
          }
        >
          <CgProfile />
        </button>
        <h1>Is this visible? {profilePane.visible ? "yes" : "no"}</h1>
      </div>
    </>
  );
}
