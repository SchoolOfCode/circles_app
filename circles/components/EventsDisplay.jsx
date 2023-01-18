import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Timeline from "./Timeline";
import { events } from "../data/events-data.js";
import "react-datepicker/dist/react-datepicker.css";

export default function EventsDisplay() {
  const [startDate, setStartDate] = useState(new Date());

  //const [events, setEvents] = useState([...events]);
  let date = `${startDate}`.substring(0, 16);
  let filteredEvents = events.filter((event) => event.date === date);

  return (
    <>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(Date) => {
            setStartDate(Date);
            console.log(date);
            console.log(filteredEvents);
          }}
        />
      </div>
      <div>
        <Timeline items={filteredEvents} />
      </div>
    </>
  );
}
