import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Timeline from "./Timeline";
import Button from "./Button";
//import { events } from "../data/events-data.js";
import "react-datepicker/dist/react-datepicker.css";

export default function EventsDisplay({
  events,
  handleDateChange,
  startDate,
  handleToday,
  handleUpcoming,
  handlePast,
}) {
  return (
    <div className="flex flex-col lg:flex-row-reverse">
      <div className="flex flex-col justify-start mt-10 h-[85%] rounded-lg p-4 bg-[rgba(255,255,255,0.2)]">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          className="border-[rgba(186,229,243)] border-solid border-[4px] rounded-md shadow-md mb-10 ml-3"
        />
        <Button buttonText="Today" handleClick={handleToday} />
        <Button buttonText="Upcoming" handleClick={handleUpcoming} />
        <Button buttonText="Past" handleClick={handlePast} />
      </div>
      <Timeline items={events} />
    </div>
  );
}
