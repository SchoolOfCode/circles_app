import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import UserPane from "./UserPane/UserPane";
import EventsDisplay from "./EventsDisplay";
import Footer from "./Footer";

const data = {
  user: "John Doe",
  linkWorker: "Lynne Summers",
  email: "johndoe@test.com",
  dateJoined: "09/01/2023",
  linkWorkerEmail: "lynnesummers@cab.com",
  circles: ["swimming club, mountain climbing"],
};

export default function AccountView({ events }) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const intialState = [...events]

  // function reducer(state, action){
  //   switch (action.type) {
  //     case "TODAY":
  //       return state.filter((event)=> )
  //   }
  // }

  console.log(events);

  const [profilePane, setProfilePane] = useState({
    visible: false,
    data: null,
  });

  function closePane() {
    setProfilePane({ ...profilePane, visible: false });
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-yellow-100 to-[#BAE5F3]">
      <div className="flex align-middle w-screen h-screen  ">
        <UserPane
          visible={profilePane.visible}
          data={profilePane.data}
          closePane={closePane}
          // handleUpcoming={handleUpcoming}
          // handlePast={handlePast}
        />
        <div className="flex justify-evenly w-[80vw] h-[85vh] ">
          <div className="flex flex-col justify-start mt-4">
            <button
              onClick={() =>
                setProfilePane({ ...profilePane, visible: true, data: data })
              }
            >
              <CgProfile />
            </button>
          </div>
          <EventsDisplay events={events} />
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
