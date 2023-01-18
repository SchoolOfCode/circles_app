import React, { useState } from "react";
import DatePicker from "react-datepicker";
import events from "../data/events-data.js";
import "react-datepicker/dist/react-datepicker.css";

export default function EventsDisplay() {
  const [startDate, setStartDate] = useState(new Date());

  const [events, setEvents] = useState([...events]);
  let filteredEvents = events.filter((event) => event.date === startDate);

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(Date) => {
          setStartDate(Date);
          console.dir(Date);
        }}
      />
      <Timeline
        items={filteredEvents}
        className="mt-0 dark:bg-gray-700 bg-blue-50 min-w-[400px] min-h-[90vh] rounded-lg p-4"
        id="timeline-container-card"
      />
    </div>
  );
}
