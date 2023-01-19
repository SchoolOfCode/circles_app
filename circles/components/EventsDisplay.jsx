import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Timeline from "./Timeline";
//import { events } from "../data/events-data.js";
import "react-datepicker/dist/react-datepicker.css";

export default function EventsDisplay({ events }) {
  const [startDate, setStartDate] = useState(new Date());

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.setHours(0, 0, 0, 0) === startDate.setHours(0, 0, 0, 0);
  });

  return (
    <div className="flex flex-row-reverse bg-zinc-400">
      <div>
        <DatePicker
          selected={startDate}
          onChange={(Date) => {
            setStartDate(Date);
          }}
        />
      </div>
      <div className="bg-slate-400">
        <Timeline items={filteredEvents} />
      </div>
    </div>
  );
}

// console.log({
//     left: event.date,
//     right: date,
//     condition: event.date === date,
//     length: date.length === event.date.length,
//   });
