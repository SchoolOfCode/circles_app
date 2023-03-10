import React from "react";
import { useState } from "react";
import FeedbackModal from "./FeedbackModal";

export default function Timeline({ items }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      // className="flex flex-col justify-evenly mt-[20vh] h-[100%]"
      className="flex flex-col justify-evenly py-auto"
      id="timeline-container-card"
    >
      {items.map((item) => {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); //this makes sure that the date generated by the datepicker has a time of 0000 same as the date on the events data
        const date = new Date(item.date);
        const eventDate = date.setHours(0, 0, 0, 0);
        let eventTime =
          `${item.start_time}`.substring(11, 16) +
          " to " +
          `${item.end_time}`.substring(11, 16);
        return (
          <div className="card w-96 min-h-36 bg-base-100 shadow-xl m-4">
            <div className="card-body flex flex-row p-3">
              <div className="flex flex-col flex-shrink-0 justify-between">
                <div className="text-sm">
                  <h2 className="card-actions">{`${date}`.substring(0, 10)}</h2>
                  <h2>{eventTime}</h2>
                </div>
                {currentDate <= eventDate ? (
                  <span
                    className={
                      item.running
                        ? "rounded-full bg-teal-100 text-sm font-medium text-green-800 max-w-fit px-2"
                        : "rounded-full bg-red-100 text-sm font-medium text-red-800 max-w-fit px-2"
                    }
                  >
                    {item.running ? "Running" : "Cancelled"}
                  </span>
                ) : (
                  <button
                    onClick={() => setOpen(true)}
                    className="decoration-black decoration-solid decoration-4 text-md border-4 border-[#BAE5F3] rounded-lg"
                  >
                    Add feedback
                  </button>
                )}
              </div>
              <div className="flex flex-col flex-shrink-0 p-3 m-0">
                <h2 className="card-title">{item.club_name}</h2>
                <p>{item.event_name}</p>
              </div>
            </div>
          </div>
        );
      })}
      <FeedbackModal open={open} setOpen={setOpen} />
    </div>
  );
}
// bg-[#BAE5F3]
