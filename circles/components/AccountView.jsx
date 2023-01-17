import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

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

  return (
    <>
      <div className="flex justify-evenly align-middle w-[100vw]">
        <button
          onClick={() =>
            setProfilePane({ ...{ visible: !profilePane.visible, data: data } })
          }
        >
          <CgProfile />
        </button>
        <h1>Is this visible? {profilePane.visible ? "yes" : "no"}</h1>
      </div>
    </>
  );
}
