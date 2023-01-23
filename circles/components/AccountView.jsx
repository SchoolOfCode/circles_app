import React, { useState, useReducer } from "react";
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

export default function AccountView({ events, user }) {
  //initial state needs to be current date
  //default needs to be current
  const [calendarDate, setCalendarDate] = useState(new Date());
console.log(events)
  console.log(calendarDate);

  const initialState = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.setHours(0, 0, 0, 0) === calendarDate.setHours(0, 0, 0, 0);
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    const today = new Date().setHours(0, 0, 0, 0);
    switch (action.type) {
      case "UPCOMING":
        return action.events.filter((event) => {
          const eventDate = new Date(event.date);
          console.log("UPCOMING");
          return eventDate.setHours(0, 0, 0, 0) >= today;
        });
      case "PAST":
        return action.events.filter((event) => {
          const eventDate = new Date(event.date);
          console.log("PAST");
          return eventDate.setHours(0, 0, 0, 0) < today;
        });

      case "SELECTED":
        return action.events.filter((event) => {
          const eventDate = new Date(event.date);
          //console.log("DEFAULT");
          return (
            eventDate.setHours(0, 0, 0, 0) === calendarDate.setHours(0, 0, 0, 0)
          );
        });
      default:
        return initialState;
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
    <div className="h-screen w-screen bg-gradient-to-b from-yellow-100 to-[#BAE5F3]">
      <div className="flex align-middle w-screen h-screen  ">
        <UserPane
          visible={profilePane.visible}
          data={profilePane.data}
          closePane={closePane}
          user={user}
          handleUpcoming={() =>
            dispatch({ type: "UPCOMING", events: [...events] })
          }
          handlePast={() => dispatch({ type: "PAST", events: [...events] })}
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
          <EventsDisplay
            events={state}
            handleDateChange={(Date) => {
              setCalendarDate(Date);
              dispatch({ type: "SELECTED", events: [...events] });
            }}
            startDate={calendarDate}
          />
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
