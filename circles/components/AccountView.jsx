import React, { useState, useReducer } from "react";
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

export default function AccountView({ events, user }) {
  const initialState = [...events];
  const [state, dispatch] = useReducer(reducer, initialState);
  const [calendarDate, setCalendarDate] = useState(new Date());

  function reducer(state, action) {
    const today = new Date().setHours(0, 0, 0, 0);
    switch (action.type) {
      case "UPCOMING":
        return state.filter((event) => {
          const eventDate = new Date(event.date);
          console.log("UPCOMING");
          return eventDate.setHours(0, 0, 0, 0) >= today;
        });
      case "PAST":
        return state.filter((event) => {
          const eventDate = new Date(event.date);
          console.log("PAST");
          return eventDate.setHours(0, 0, 0, 0) < today;
        });
      default:
        return state.filter((event) => {
          const eventDate = new Date(event.date);
          return (
            eventDate.setHours(0, 0, 0, 0) === calendarDate.setHours(0, 0, 0, 0)
          );
        });
    }
  }

  //need to create a state object {past:..., upcoming:...,current:...}
  //pass different properties of this object as states to events display
  //conditionally render either 'timeline' or other component.

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
          user={user}
          handleUpcoming={() => dispatch({ type: "UPCOMING" })}
          handlePast={() => dispatch({ type: "PAST" })}
        />
        <div className="flex justify-evenly w-[80vw] h-[85vh] bg-amber-200">
          <div className="flex flex-col justify-start mt-4">
            <button
              onClick={() =>
                setProfilePane({ ...profilePane, visible: true, data: data })
              }
            >
              <CgProfile />
            </button>
          </div>
          <EventsDisplay
            events={state}
            handleDateChange={(Date) => {
              setStartDate(Date);
            }}
            startDate={calendarDate}
          />
        </div>
      </div>
    </>
  );
}
