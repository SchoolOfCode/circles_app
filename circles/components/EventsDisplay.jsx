import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Timeline from "./Timeline";
import { events } from "../data/events-data.js";
import "react-datepicker/dist/react-datepicker.css";

export default function EventsDisplay() {
  const [startDate, setStartDate] = useState(new Date());

  let date = `${startDate}`.substring(0, 15);
  let filteredEvents = events.filter((event) => {
    return event.date === date;
  });

  return (
    <>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(Date) => {
            setStartDate(Date);
          }}
        />
      </div>
      <div>
        <Timeline items={filteredEvents} />
      </div>
    </>
  );
}

// console.log({
//     left: event.date,
//     right: date,
//     condition: event.date === date,
//     length: date.length === event.date.length,
//   });
