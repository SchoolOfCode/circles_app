import React, { useState } from "react";
import { events } from "../data/events-data";
import Timeline from "./Timeline";




export default function EventsView({ onClick }) {
  const [date, setDate] = useState(null);
  const [btnState, setBtnState] = useState(false);

  let filteredEvents = events.filter((event) => event.date === date);

  //cards need to be sorted in terms of datetime so array needs to be sorted

  const days = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];

  return (
    <div className="flex flex-row-reverse justify-around h-[80vh] w-[100vw]">
      <div
        className="mt-0 mr-[20vw] dark:bg-gray-700 bg-blue-50 min-w-96 min-h-[90vh] rounded-lg p-4"
        id="calendar-container-card"
      >
        <div className="mt-11 h-fit bg-white rounded-xl">
          <div className="flex justify-center font-mons font-bold text-xl pb-4">
            <button>{"<"}</button>
            <h2>January 2023</h2>
            <button>{">"}</button>
          </div>
          <div className="grid grid-cols-7 gap-4 mb-6 text-2xl font-bold">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>
          <div className="grid grid-cols-7 gap-3">
            {days.map((day) => {
              return (
                <button
                  className="hover:bg-blue-100 w-10 h-10 rounded-full"
                  onClick={() => {
                    setBtnState(!btnState);
                    setDate(`${day}/01`);
                  }}
                >
                  <time datetime={`2023-01-${day}`} className="text-2xl">
                    {day}
                  </time>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <Timeline
        items={filteredEvents}
        className="mt-0 dark:bg-gray-700 bg-blue-50 min-w-[400px] min-h-[90vh] rounded-lg p-4"
        id="timeline-container-card"
      />
    </div>
  );
}
